"use server"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import useFacilitiesController from '../../controller'
import useAirportController from '@/app/aeropuertos/controller'
import useRepairController from '../../controller'
import usePlanesController from '@/app/naves/controller'


export default async function EditRepairPage({params}: {
    params: { id: string }
  }) {
    const {getRepair, updateRepair} = useRepairController()

    const repair = await getRepair(params['id'])
    return (
        <form className='px-4' action={updateRepair}>
            <input 
                type='hidden'
                name="idrepair"
                id="idrepair"
                value={params['id']}
                readOnly
            />
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Editar Reparacion</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Editar los datos de una reparacion agregada.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="end" className="block text-sm font-medium leading-6 text-gray-900">
                                Fecha Final
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="datetime-local"
                                        name="end"
                                        id="end"
                                        autoComplete="end"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        defaultValue={new Date(repair.FechaFinal).toString()}
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
