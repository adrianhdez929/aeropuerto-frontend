import {Arrival} from '@/types/entities'
import { API_URL } from '@/types/constants'

import usePlanesController from '../naves/controller'

const useArrivalsController = () => {
    const {getPlane} = usePlanesController()
    const url = `${API_URL}Flight`

    async function getArrivals(): Promise<Arrival[]> {
        'use server'

        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })

        const results = await response.json()

        return results.map((result: any): Arrival => ({
            Id: result.id,
            Salida: result.departureDate,
            Llegada: result.arrivalDate,
            Origen: {
                Id: '',
                Nombre: result.origin.name,
                Direccion: result.origin.address,
                PosGeo: result.origin.geographicPosition
            },
            Destino: {
                Id: '',
                Nombre: result.destination.name,
                Direccion: result.destination.address,
                PosGeo: result.destination.geographicPosition
            },
            Nave: {
                Id: '',
                NoMatricula: result.ship.tuition,
                Clasificacion: result.ship.clasification,
                CantTripulantes: result.ship.tripulationAmmount,
                CapCarga: result.ship.capacity,
                TotalPlazas: result.ship.passengersAmount,
                Propietario: result.ship.propietaryName
            },
            ArriboPropietario: result.arrivedClientType
        }))
    }

    async function getArrival(id: string): Promise<Arrival> {
        'use server'

        const response = await fetch(`${url}/${id}`, {
            cache: 'no-cache'
        })

        const result = await response.json()

        return {
            Id: result.id,
            Salida: result.departureDate,
            Llegada: result.arrivalDate,
            Origen: {
                Id: '',
                Nombre: result.origin.name,
                Direccion: result.origin.address,
                PosGeo: result.origin.geographicPosition
            },
            Destino: {
                Id: '',
                Nombre: result.destination.name,
                Direccion: result.destination.address,
                PosGeo: result.destination.geographicPosition
            },
            Nave: {
                Id: '',
                NoMatricula: result.ship.tuition,
                Clasificacion: result.ship.clasification,
                CantTripulantes: result.ship.tripulationAmmount,
                CapCarga: result.ship.capacity,
                TotalPlazas: result.ship.passengersAmount,
                Propietario: result.ship.propietaryName
            },
            ArriboPropietario: result.arrivedClientType
        }
    }

    async function createArrival(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'departureDate': formData.get('departure'),
            'arrivalDate': formData.get('arrival'),
            'airportOrigin': formData.get('origin'),
            'airportDestination': formData.get('dest'),
            'ship': formData.get('ship'),
            'client': formData.get('client'),
            'arrivedClientType': formData.get('type')
        })

        console.log(body)

        const response = await fetch(`${url}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    return {
        getArrivals,
        getArrival,
        createArrival
    }
}

export default useArrivalsController