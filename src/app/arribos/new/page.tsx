'use server'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import useAirportController from '@/app/aeropuertos/controller'
import usePlanesController from '@/app/naves/controller'
import useClientsController from '@/app/clientes/controller'
import useArrivalsController from '../controller'


export default async function CreateArrivalPage() {
    const {getAirports} = useAirportController()
    const {getPlanes} = usePlanesController()
    const {getClients} = useClientsController()
    const {createArrival} = useArrivalsController()

    const airports = await getAirports()
    const planes = await getPlanes()
    const clients = await getClients() 

    return (
        <form className='px-4' action={createArrival}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Agregar Arribo</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Crear un nuevo arribo.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="arrival" className="block text-sm font-medium leading-6 text-gray-900">
                                Fecha Arribo
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="datetime-local"
                                        name="arrival"
                                        id="arrival"
                                        autoComplete="arrival"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="departure" className="block text-sm font-medium leading-6 text-gray-900">
                                Fecha Salida
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="datetime-local"
                                        name="departure"
                                        id="departure"
                                        autoComplete="departure"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="origin" className="block text-sm font-medium leading-6 text-gray-900">
                                Aeropuerto de Origen
                            </label>
                            <div className="mt-2">
                                <select
                                    id="origin"
                                    name="origin"
                                    autoComplete="origin"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {airports.map((airport, key) => (
                                        <option key={key} value={airport.Id}>{airport.Nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="dest" className="block text-sm font-medium leading-6 text-gray-900">
                                Aeropuerto de Destino
                            </label>
                            <div className="mt-2">
                                <select
                                    id="dest"
                                    name="dest"
                                    autoComplete="dest"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {airports.map((airport, key) => (
                                        <option key={key} value={airport.Id}>{airport.Nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="ship" className="block text-sm font-medium leading-6 text-gray-900">
                                Nave
                            </label>
                            <div className="mt-2">
                                <select
                                    id="ship"
                                    name="ship"
                                    autoComplete="ship"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {planes.map((plane, key) => (
                                        <>
                                            {console.log(plane.Id)}
                                            <option key={key} value={plane.Id}>{plane.NoMatricula}</option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="client" className="block text-sm font-medium leading-6 text-gray-900">
                                Piloto
                            </label>
                            <div className="mt-2">
                                <select
                                    id="client"
                                    name="client"
                                    autoComplete="client"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {clients.map((client, key) => (
                                        <option key={key} value={client.Id}>{client.Nombre}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                Categoria Propietario
                            </label>
                            <div className="mt-2">
                                <select
                                    id="type"
                                    name="type"
                                    autoComplete="type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>0</option>
                                </select>
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
                    Crear
                </button>
            </div>
        </form>
    )
}
