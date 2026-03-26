import { GlobalProvider } from "./context/GlobalState.jsx";

import  Header  from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import FormTransaction from "./components/transactions/FormTransaction.jsx";
import TransactionsList  from "./components/transactions/TransactionsList.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import { ExpenseChat } from "./components/ExpenseChart.jsx";

function App() {
  return (
<GlobalProvider>
  <div className="bg-gray-900 text-white min-h-screen overflow-y-auto flex flex-col justify-center items-center gap-4 p-4">
    {/* Encabezado */}
    <div className="bg-gray-800 p-4 rounded-lg w-full max-w-4xl text-center mt-4 sm:mt-0">
      <Header />
    </div>

    {/* Contenedor de las secciones principales */}
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
      {/* Formularios e historial */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Formulario de ingresos/gastos */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md order-2 md:order-1">
          <IncomeExpenses />
          <Balance />
          <FormTransaction />
        </div>

        {/* Historial de transacciones */}
        <div className="bg-gray-800 p-6 rounded-lg h-[210px] shadow-md order-3 md:order-2">
          <TransactionsList />
        </div>
      </div>

      {/* Gráfico de gastos */}
      <div className="bg-gray-800 p-10 rounded-lg flex-1 shadow-lg order-1 md:order-3">
        <ExpenseChat />
      </div>
    </div>
  </div>
</GlobalProvider>
  )
}

export default App