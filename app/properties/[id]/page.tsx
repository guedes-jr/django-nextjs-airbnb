import Image from "next/image"
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"

const page = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          alt="Beach house"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="py-6 col-span-3">
          <h1 className="mb-4 text-4xl">Nome da propriedade</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 hóspedes - 2 quartos - 1 banheiro
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image 
              src="/profile_pic_1.jpg"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full"
            />

            <p><strong>João Guedes</strong> é seu anfitrião</p>
          </div>

          <hr />

          <p className="mt-6 text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque molestias maiores, velit ducimus eos ab 
            dolorum veniam aliquam alias, reiciendis quam mollitia laudantium modi. Blanditiis voluptas culpa, obcaecati voluptate 
            beatae expedita reiciendis soluta facilis eligendi eveniet impedit quasi esse velit nesciunt, incidunt placeat maxime 
            porro dolor quam. Mollitia, dolor?
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  )
}

export default page