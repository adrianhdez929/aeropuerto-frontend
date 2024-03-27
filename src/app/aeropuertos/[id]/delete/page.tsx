'use server'

import { redirect } from "next/navigation"
import useAirportController from "../../controller"

export default async function DeleteAirportPage({params}: {
    params: {id: string}
}) {
    const {deleteAirport} = useAirportController()

    await deleteAirport(params['id'])

    redirect('/aeropuertos')
}