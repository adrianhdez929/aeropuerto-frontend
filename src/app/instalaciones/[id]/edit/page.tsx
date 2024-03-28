"use server"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import useFacilitiesController from '../../controller'
import useAirportController from '@/app/aeropuertos/controller'


export default async function EditFacilityPage({params}: {
    params: { id: string }
  }) {
    const {getFacility, updateFacility} = useFacilitiesController()
    const {getAirports} = useAirportController()

    const airports = await getAirports()
    const facility = await getFacility(params['id'])

    return (
        <form className='px-4' action={updateFacility}>
            <input 
                type='hidden'
                name="idfac"
                id="idfac"
                value={params['id']}
                readOnly
            />
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Editar Aeropuerto</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Editar los datos de una instalacion agregada.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="idaero" className="block text-sm font-medium leading-6 text-gray-900">
                                Aeropuerto
                            </label>
                            <div className="mt-2">
                                <select
                                    id="idaero"
                                    name="idaero"
                                    autoComplete="idaero"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    defaultValue={facility.IdAero}
                                >
                                    {airports.map((airport, key) => (
                                        <option key={key} value={airport.Id}>{airport.Nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                Tipo
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        autoComplete="type"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        defaultValue={facility.Tipo}
                                    />
                                    {/* {airports.map((airport, key) => (
                                        <option key={key} value={airport.Id}>{airport.Nombre}</option>
                                    ))}
                                </select> */}
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        defaultValue={facility.Nombre}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Descripcion
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        autoComplete="description"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        defaultValue={facility.Descripcion ?? ''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Ubicacion
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        autoComplete="location"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        defaultValue={facility.Ubicacion}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Editar
                </button>
            </div>
        </form>
    )
}
