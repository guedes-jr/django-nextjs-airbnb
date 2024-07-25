import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertyListItem = () => {
  const id = 1;

  return (
    <Link href={`/properties/${id}`}>
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
    </Link>
  )
}

export default PropertyListItem