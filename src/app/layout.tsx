import './globals.css'
import useAppController from './controller'
import { cookies } from 'next/headers'

type Route = {
  name: string
  href: string
  icon: string
  current: boolean
}

type RouteMap = {
  [key: string]: Route[]
}

const navigation: RouteMap = {
  'Cliente': [
    {name: 'Naves', href: '/naves', icon: 'div', current: false},
    {name: 'Servicios', href: '/servicios', icon: 'div', current: false},
  ],
  'Staff': [
    {name: 'Naves', href: '/naves', icon: 'div', current: false},
    {name: 'Clientes', href: '/clientes', icon: 'div', current: false},
    {name: 'Arribos', href: '/arribos', icon: 'div', current: false}
  ],
  'Administrador': [
    {name: 'Aeropuertos', href: '/aeropuertos', icon: 'div', current: false },
    {name: 'Instalaciones', href: '/instalaciones', icon: 'div', current: false},
    {name: 'Arribos', href: '/arribos', icon: 'div', current: false},
    {name: 'Clientes', href: '/clientes', icon: 'div', current: false}
  ],
  'Mecanico': [
    {name: 'Reparaciones', href: '/reparaciones', icon: 'div', current: false}
  ]
}

function classNameNames(...classNames: any[]) {
  return classNames.filter(Boolean).join(' ')
}

async function SideNav() {
  const {getCurrentUser} = useAppController()

  const isLoggedIn = cookies().get('user-id') !== undefined

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
      { isLoggedIn && (
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation[(await getCurrentUser()).Tipo].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      )}
        {isLoggedIn ? (
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              {/* <span className="sr-only">Your profile</span> */}
              <span aria-hidden="true">{(await getCurrentUser()).Nombre}</span>
            </a>
          </li>
          ) : (
              <li>
                <a href='/auth/login' className='text-white mx-5'>Login</a>
                <a href='/auth/register' className='text-white mx-5'>Registro</a>
              </li>
          )
        }
      </ul>
    </nav>
  )
}

export default async function RootLayout({children}) {
  
  const isLoggedIn = cookies().get('user-id') !== undefined
  
  return (
    <div className='grid grid-cols-4 h-screen'>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 col-span-1">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <SideNav />
      </div>
      <div className='col-span-3 p-4'>
        {children}
      </div>
    </div>
      
    )
  }