import React from 'react'

const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
        <h2 className="mb-5 text-2xl"><strong>R$ 200,00</strong>/noite</h2>
        <div className="mb-6 p-3 border border-gray-400 rounded-lg">
            <label htmlFor="select" className="mb-2 block font-bold text-xM">Hóspedes</label>
            <select name="select" className="w-full -ml-1 text-xm p-2">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
            </select>
        </div>
        <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl cursor-pointer">
            Reservar
        </div>
        <div className="mb-4 flex justify-between align-center">
            <p>R$ 200,00 * 4 noites</p>
            <p>R$ 800,00</p>
        </div>
        <div className="mb-4 flex justify-between align-center">
            <p>Serviços</p>
            <p>R$ 40,00</p>
        </div>
        <hr />
        <div className="mt-4 flex justify-between align-center font-bold">
            <p>Total</p>
            <p>R$ 840,00</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar