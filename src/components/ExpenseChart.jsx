import {VictoryPie, VictoryLabel} from "victory"
import { useGlobalState } from "../context/GlobalState"



export const ExpenseChat = () => {

  const {transactions} = useGlobalState()

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount), 0
  );
  const totalIncomes = transactions
   .filter(transaction => transaction.amount > 0)
   .reduce((acc,transaction) => (acc += transaction.amount), 0
  );
   
  const totalExpenses = transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - (expensesPercentage);

  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="bg-gray-900 p-4 my-2 rounded-lg">
        <div className="h-full flex items-center justify-center w-full flex-col gap-5">
          <h1 className="text-3xl font-bold my-2 ">No hay nuevos ingresos</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="312" height="312" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
            <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: expensesPercentage },
          { x: "Incomes", y: incomesPercentage },
        ]}
        animate={{
          duration: 1000,
        }}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryLabel
            angle={45}
            style={{
              fill: "white",
            }}
          />
        }
      />
    </div>
  )
}
