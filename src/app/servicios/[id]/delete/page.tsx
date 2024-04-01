'use server'

import { redirect } from "next/navigation"
import useServicesController from "../../controller"

export default async function DeleteServicePage({params}: {
    params: {id: string}
}) {
    const {deleteService} = useServicesController()

    await deleteService(params['id'])

    redirect('/servicios')
}