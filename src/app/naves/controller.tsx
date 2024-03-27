import {IPlane} from '@/types/entities'
import { API_URL } from '@/types/constants'
import planesData from './data.json'

const usePlanesController = () => {
    const url = `${API_URL}Ship/`

    async function getPlanes(): Promise<IPlane[]> {
        'use server'
        const response = await fetch(`${url}`)
        // return planesData.map((plane): IPlane => (
        //     {
        //         NoMatricula: plane.matricula,
        //         CapCarga: plane.cap_carga,
        //         CantTripulantes: plane.cant_tripulantes,
        //         Clasificacion: plane.clasificacion,
        //         TotalPlazas: plane.total_plazas
        //     }
        // ))
        const results = await response.json()
        console.log(results)

        return results.map((result: any) => ({
            NoMatricula: result.matricula,
            CapCarga: result.cap_carga,
            CantTripulantes: result.cant_tripulantes,
            Clasificacion: result.clasificacion,
            TotalPlazas: result.total_plazas
        }))
    }

    async function createPlane(): Promise<void> {
        'use server'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'Tuition': 'test tuition',
                'Clasification': 'A5',
                'PassengersAmmount': 155,
                'TripulationAmmount': 10,
                'Capacity': 1000,
                'PropietaryId': 1
            })
        })
    }

    return {
        getPlanes,
        createPlane
    }

}

export default usePlanesController