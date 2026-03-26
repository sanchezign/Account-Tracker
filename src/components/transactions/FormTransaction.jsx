import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

export const FormTransaction = () => {
  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })
    setAmount("")
    setDescription("")
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Ingresar un descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input type="number" step={0.01} placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-900 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-emerald-600 text-white px-3 py-2 rounded-lg font-bold block w-full hover:bg-emerald-700">Agregar Transaccion</button>
      </form>
    </div>
  )
}

export default FormTransaction