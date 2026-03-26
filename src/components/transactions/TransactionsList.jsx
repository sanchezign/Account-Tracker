import { useGlobalState } from "../../context/GlobalState";
import { TransactionsItem } from "./TransactionsItem";

function TransactionsList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div className="bg-gray-900 p-4 my-2 rounded-lg">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-xl font-bold my-2">
            El historial esta vacio
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded pr-2">
      <h1 className="text-xl font-bold mb-4">Historial de Transacciones</h1>
      <ul className="space-y-2">
        {transactions
          .slice()
          .reverse()
          .map((transaction) => (
            <TransactionsItem transaction={transaction} key={transaction.id} />
          ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
