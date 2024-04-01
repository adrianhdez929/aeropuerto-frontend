import {IPlane} from '@/types/entities'
import { API_URL } from '@/types/constants'

const usePlanesController = () => {
    const url = `${API_URL}Ship`

    async function getPlanes(): Promise<IPlane[]> {
        'use server'
        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })

        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            NoMatricula: result.tuition,
            CapCarga: result.capacity,
            CantTripulantes: result.tripulationAmmount,
            Clasificacion: result.clasification,
            TotalPlazas: result.passengersAmmount,
            Propietario: result.propietaryName
        }))
    }

    async function getPlane(id: string): Promise<IPlane> {
        'use server'
        const response = await fetch(`${url}/${id}`, {
            cache: 'no-cache'
        })

        const result = await response.json()

        return {
            Id: id,
            NoMatricula: result.tuition,
            CapCarga: result.capacity,
            CantTripulantes: result.tripulationAmmount,
            Clasificacion: result.clasification,
            TotalPlazas: result.passengersAmmount,
            Propietario: result.propietaryName
        }
    }

    async function createPlane(formData: FormData): Promise<void> {
        'use server'
        const body = JSON.stringify({
            'Tuition': formData.get('tuition'),
            'Clasification': formData.get('classif'),
            'PassengersAmmount': formData.get('passamount'),
            'TripulationAmmount': formData.get('tripamount'),
            'Capacity': formData.get('capacity'),
            'PropietaryId': formData.get('idprop')
        })

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })

        console.log(await response.json())
    }

    return {
        getPlanes,
        getPlane,
        createPlane
    }

}

export default usePlanesController