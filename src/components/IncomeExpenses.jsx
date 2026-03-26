import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {
  const {transactions} =  useGlobalState()

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4 className="font-bold">Ingresos</h4>
        <p className="font-bold">$ {income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4 className="font-bold">Gastos</h4>
        <p className="font-bold">$ {expense}</p>
      </div>
    </>
  )
}

export default IncomeExpenses