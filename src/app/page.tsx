import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function HomePage() {
  return (
    <div className="font-bold text-gray-900">
      Bienvenido al sistema SkyManage, selecciona una categoria en la barra lateral para empezar. 
    </div>
  )
}