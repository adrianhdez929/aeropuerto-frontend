'use client'

import React from 'react'

export default function CreateAirportComponent({createFunc}: any) {
    return (
        <form action={createFunc}>
          <button
            type="submit"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar aeropuerto
          </button>
        </form>
    )
}