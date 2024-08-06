import Image from "next/image";

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">Minhas reservas</h1>
            <div className="space-y-4">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src="/beach_1.jpg"
                                alt="Casa de praia"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl">Nome da propriedade</h2>
                        <p className="mb-2"><strong>Data de check-in:</strong> 12/02/2024</p>
                        <p className="mb-2"><strong>Data de check-out:</strong> 14/02/2024</p>

                        <p className="mb-2"><strong>Número de noites:</strong> 2</p>
                        <p className="mb-2"><strong>Preço total:</strong> R$ 200,00</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb transition text-white rounded-xl hover:bg-airbnb-dark">
                            Ir para a propriedade
                        </div>
                    </div>
                </div>

                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src="/beach_1.jpg"
                                alt="Casa de praia"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl">Nome da propriedade</h2>
                        <p className="mb-2"><strong>Data de check-in:</strong> 12/02/2024</p>
                        <p className="mb-2"><strong>Data de check-out:</strong> 14/02/2024</p>

                        <p className="mb-2"><strong>Número de noites:</strong> 2</p>
                        <p className="mb-2"><strong>Preço total:</strong> R$ 200,00</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb transition text-white rounded-xl hover:bg-airbnb-dark">
                            Ir para a propriedade
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservationsPage;