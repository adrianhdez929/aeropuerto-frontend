import {IAirport} from '@/types/entities'
import {API_URL} from '@/types/constants'

import airportsData from './data.json'

const useAirportController = () => {
    const url = `${API_URL}Airport`

    async function getAirports(): Promise<IAirport[]> {
        'use server'
        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            Nombre: result.name,
            Direccion: result.address,
            PosGeo: result.geographicPosition
        }))
    }

    async function getAirport(id: string): Promise<IAirport> {
        'use server'
        const response = await fetch(`${url}/${id}`)

        const result = await response.json()

        return {
            Id: result.id,
            Nombre: result.name,
            Direccion: result.address,
            PosGeo: result.geographicPosition
        }
    }

    async function createAirport(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'Name': formData.get('name'),
            'Address': formData.get('address'),
            'GeographicPosition': formData.get('geo')
        })

        const response = await fetch(`${url}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function updateAirport(formData: FormData): Promise<void> {
        'use server'
        const body = JSON.stringify({
            'Id': formData.get('idaero'),
            'Name': formData.get('name'),
            'Address': formData.get('address'),
            'GeographicPosition': formData.get('geo')
        })

        const response = await fetch(`${url}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function deleteAirport(id: string): Promise<void> {
        'use server'
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'Id': id
            })
        })
    }

    return {
        getAirports,
        getAirport,
        createAirport,
        updateAirport,
        deleteAirport
    }

}

export default useAirportController