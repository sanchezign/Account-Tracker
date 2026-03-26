import { useGlobalState } from "../context/GlobalState"

export const Balance = () => {

  const {transactions} = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item) => (acc += item), 0)

  return (
    <div className="flex justify-between">
      <h3 className="text-xl font-bold">Balance Total</h3>
      <h1 className="text-xl font-bold">$ {total}</h1>
    </div>

  )
}

export default Balance