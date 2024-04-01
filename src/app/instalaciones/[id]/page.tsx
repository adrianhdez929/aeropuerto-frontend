import { PaperClipIcon } from '@heroicons/react/20/solid'

import useFacilitiesController from '../controller'

export default async function GetFacilityPage({params}: {
    params: {id: string}
}) {
  const {getFacility} = useFacilitiesController()

  const facility = await getFacility(params['id'])

  return (
    <div className="px-4">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Instalacion {facility.Id}</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{facility.Nombre}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Tipo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{facility.Tipo}</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Descripcion</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{facility.Descripcion}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Ubicacion</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{facility.Ubicacion}</dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Aeropuerto</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{facility.NombreAero}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm font-medium leading-6 text-gray-900">Servicios</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div className="py-2 w-1/5">
                <a
                  href={`/instalaciones/${params['id']}/service`}
                  type="button"
                  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Agregar servicio
                </a>
              </div>
                {facility.Servicios.length > 0 ?  
                    (<ul role="list">
                        {facility.Servicios.map((service, key) => (
                            <li key={key} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 divide-y divide-gray-100 rounded-md border border-gray-200">
                                <div className="flex w-0 flex-1 items-center">
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="font-medium">Codigo: <span className="truncate font-light">{service.Codigo}</span></span>
                                    <span className="font-medium">Precio: <span className="truncate font-light">$ {service.Precio}</span></span>
                                    <span className="font-medium">Tipo: <span className="truncate font-light">{service.NombreTipo}</span></span>
                                </div>
                                </div>
                            </li>    
                        ))}
                    </ul>) : (
                      <>No presta ningun servicio</>
                    )
                }
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
