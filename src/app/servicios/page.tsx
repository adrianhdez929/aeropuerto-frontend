
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import useServicesController from './controller'
import useAppController from '../controller'
import useClientsController from '../clientes/controller'
import { IService } from '@/types/entities'

export default async function ServicesPage() {
  const { getServices, getTypes } = useServicesController()
  const {getUserServices} = useClientsController()
  const { getCurrentUser} = useAppController()

  const user = await getCurrentUser()
  const services = await getServices()

  let filteredServices: IService[] = []

  if (user.Tipo === 'Cliente') {
    filteredServices = await getUserServices(user.Id)
    console.log(filteredServices)
  } else {
    filteredServices = services
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {user.Tipo === 'Cliente' ? (
        <>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">Servicios solicitados</h1>
              <p className="mt-2 text-sm text-gray-700">
                Lista de los servicios solicitados.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <a
                href='/servicios/new'
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Solicitar servicio
              </a>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Codigo
                          <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Descripcion
                          <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Precio
                          <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      {/* <th scope="col" className="relative py-3.5 pl-3 pr-0">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredServices.map((service) => (
                      <tr key={service.Id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a href={`/servicios/${service.Id}`}>
                              {service.Codigo}
                            </a>
                          </td> 
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {service.Descripcion}
                          </td> 
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {service.Precio}
                          </td>                   
                          {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                          <a href={`/servicios/${service.Id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                              Editar <span className="sr-only">, {service.Id}</span>
                            </a>
                            <a href={`/servicios/${service.Id}/delete`} className="text-indigo-600 hover:text-indigo-900">
                              Eliminar <span className="sr-only">, {service.Id}</span>
                            </a>
                          </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Servicios</h1>
            <p className="mt-2 text-sm text-gray-700">
              Lista de los servicios agregados a la base de datos.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <a
              href='/servicios/new'
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agregar servicio
            </a>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Codigo
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Descripcion
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Precio
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredServices.map((service) => (
                    <tr key={service.Id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a href={`/servicios/${service.Id}`}>
                            {service.Codigo}
                          </a>
                        </td> 
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {service.Descripcion}
                        </td> 
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {service.Precio}
                        </td>                   
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                        <a href={`/servicios/${service.Id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                            Editar <span className="sr-only">, {service.Id}</span>
                          </a>
                          <a href={`/servicios/${service.Id}/delete`} className="text-indigo-600 hover:text-indigo-900">
                            Eliminar <span className="sr-only">, {service.Id}</span>
                          </a>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Tipos de Servicios</h1>
            <p className="mt-2 text-sm text-gray-700">
              Lista de los tipos de servicios agregados a la base de datos.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <a
              href='/servicios/tipo/new'
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agregar tipo de servicio
            </a>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Codigo
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <a href="#" className="group inline-flex">
                        Nombre
                        <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </a>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {(await getTypes()).map((type) => (
                    <tr key={type.Id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a href={`/servicios/tipo/${type.Id}`}>
                            {type.Nombre}
                          </a>
                        </td>                  
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                          <a href={`/servicios/tipo/${type.Id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                            Editar <span className="sr-only">, {type.Id}</span>
                          </a>
                          <a href={`/servicios/tipo/${type.Id}/delete`} className="text-indigo-600 hover:text-indigo-900">
                            Eliminar <span className="sr-only">, {type.Id}</span>
                          </a>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </>
      )}
      
    </div>
  )
}