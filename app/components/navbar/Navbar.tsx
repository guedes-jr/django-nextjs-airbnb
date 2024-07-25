"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchFilters from './SearchFilters'
import UserNav from './UserNav'
import AddPropertyButton from './AddPropertyButton'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-full fixed top-0 py-6 border-b bg-white z-10">
        <div className="max-w-[1500px] mx-auto px-6">
            <div className="flex justify-between items-center mb-6">
                <Link href="/">
                    <Image 
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={38}
                    />
                </Link>
                <div className="flex space-x-8 items-center">
                    {(path === '/')? ( 
                        <h1 className="p-2 text-sm cursor-pointer font-semibold rounded-full hover:bg-gray-200">Acomodações</h1>
                    ): (
                        <SearchFilters />
                    )}
                </div>
                <div className="flex items-center space-x-6">
                    <AddPropertyButton />
                    <UserNav />
                </div>
            </div>
            {(path === '/')? ( 
                <div className="flex items-center justify-center">
                    <SearchFilters />
                </div>
            ):''}
        </div>
    </div>
  )
}

export default Navbar