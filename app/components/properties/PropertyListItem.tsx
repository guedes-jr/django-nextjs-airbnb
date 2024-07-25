import Image from 'next/image'
import React from 'react'

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beach_1.jpg"
          alt="Item Beach"
          sizes="(max-width: 768px): 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Propriedade</p>
      </div>
      <div className="mt-2">
        <p className="text-sm"><strong>R$ 200,00</strong>/noite</p>
      </div>
    </div>
  )
}

export default PropertyListItem