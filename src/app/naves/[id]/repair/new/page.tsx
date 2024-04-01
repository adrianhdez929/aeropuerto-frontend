"use server"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import useServicesController from '@/app/servicios/controller'
import useRepairController from '@/app/reparaciones/controller'


export default async function CreatePlaneRepairPage({params}: {
    params: {id: string}
}) {
    const {getRepairServices} = useServicesController()
    const {createRepair} = useRepairController()

    const services = await getRepairServices()

    return (
        <form className='px-4' action={createRepair}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Solicitar Reparacion</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Solicitar reparacion para la nave {params['id']}.
                    </p>
                    
                    
                    <input
                        type='hidden'
                        name='idship'
                        id='idship'
                        defaultValue={params['id']} 
                    />

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="estimate" className="block text-sm font-medium leading-6 text-gray-900">
                                Fecha Estimada
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="datetime-local"
                                        name="estimate"
                                        id="estimate"
                                        autoComplete="estimate"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="idserv" className="block text-sm font-medium leading-6 text-gray-900">
                                Servicio
                            </label>
                            <div className="mt-2">
                                <select
                                    id="idserv"
                                    name="idserv"
                                    autoComplete="idserv"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {services.map((type, key) => (
                                        <option key={key} value={type.Id}>{type.Codigo}</option>
                                    ))}
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
