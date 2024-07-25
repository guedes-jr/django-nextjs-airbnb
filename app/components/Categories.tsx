import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 justify-center">
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_iconicos.png"
                alt='Icônicos'
                width={24}
                height={24}
            />
            <p className="text-xs">Icônicos</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_chales.png"
                alt='Chalés'
                width={24}
                height={24}
            />
            <p className="text-xs">Chalés</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_praias.png"
                alt='Em frente à praia'
                width={24}
                height={24}
            />
            <p className="text-xs">Em frente à praia</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_vistas.png"
                alt='Vistas incrívei'
                width={24}
                height={24}
            />
            <p className="text-xs">Vistas incríveis</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_golfe.png"
                alt='Golfe'
                width={24}
                height={24}
            />
            <p className="text-xs">Golfe</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_novidades.png"
                alt='Novidades'
                width={24}
                height={24}
            />
            <p className="text-xs">Novidades</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_interior.png"
                alt='No interior'
                width={24}
                height={24}
            />
            <p className="text-xs">No interior</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_fazendas.png"
                alt='Fazendas'
                width={24}
                height={24}
            />
            <p className="text-xs">Fazendas</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_micro_casas.png"
                alt='Micro casas'
                width={24}
                height={24}
            />
            <p className="text-xs">Micro casas</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_mansoes.png"
                alt='Mansões'
                width={24}
                height={24}
            />
            <p className="text-xs">Mansões</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_pousadas.png"
                alt='Pousadas'
                width={24}
                height={24}
            />
            <p className="text-xs">Pousadas</p>
        </div>
        <div className="pb-2 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-80 hover:border-gray-600 active:border-black active:opacity-100">
            <Image 
                src="/icn_category_em_alta.png"
                alt='Em alta'
                width={24}
                height={24}
            />
            <p className="text-xs">Em alta</p>
        </div>
    </div>
  )
}

export default Categories