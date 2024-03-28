import {IFacility} from '@/types/entities'
import { API_URL } from '@/types/constants'
import facilitiesData from './data.json'

const useFacilitiesController = () => {
    const url = `${API_URL}Installation`

    async function getFacilities(): Promise<IFacility[]> {
        'use server'
        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            IdAero: result.idAirport,
            NombreAero: result.nameAirport,
            Nombre: result.name,
            Descripcion: result.description,
            Tipo: result.type,
            Ubicacion: result.location
        }))
    }

    async function getFacility(id: string): Promise<IFacility> {
        'use server'
        const response = await fetch(`${url}/${id}`)

        const result = await response.json()

        return {
            Id: result.id,
            IdAero: result.idAirport,
            Tipo: result.type,
            NombreAero: result.nameAirport,
            Nombre: result.name,
            Descripcion: result.description,
            Ubicacion: result.location
        }
    }

    async function createFacility(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'IdAirport': formData.get('idaero'),
            'Name': formData.get('name'),
            'Type': formData.get('type'),
            'Description': formData.get('description'),
            'Location': formData.get('location')
        })

        const response = await fetch(`${url}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function updateFacility(formData: FormData): Promise<void> {
        'use server'
        const body = JSON.stringify({
            'Id': formData.get('idfac'),
            'IdAirport': formData.get('idaero'),
            'Type': formData.get('type'),
            'Name': formData.get('name'),
            'Description': formData.get('description'),
            'Location': formData.get('location')
        })

        const response = await fetch(`${url}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function deleteFacility(id: string): Promise<void> {
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
        getFacilities,
        getFacility,
        createFacility,
        updateFacility,
        deleteFacility
    }
}

export default useFacilitiesController