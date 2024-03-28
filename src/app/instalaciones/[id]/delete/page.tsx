'use server'

import { redirect } from "next/navigation"
import useFacilitiesController from "../../controller"

export default async function DeleteFacilityPage({params}: {
    params: {id: string}
}) {
    const {deleteFacility} = useFacilitiesController()

    await deleteFacility(params['id'])

    redirect('/instalaciones')
}