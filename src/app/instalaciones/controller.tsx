import {IFacility, IFacilityType} from '@/types/entities'
import { API_URL } from '@/types/constants'

const useFacilitiesController = () => {
    const url = `${API_URL}Installation`
    const typeUrl = `${API_URL}InstallationType`

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
            Ubicacion: result.location,
            IdTipoInstalacion: result.idInstallationType
        }))
    }

    async function getFacility(id: string): Promise<IFacility> {
        'use server'
        const response = await fetch(`${url}/${id}`, {
            cache: 'no-cache'
        })

        const result = await response.json()

        return {
            Id: result.id,
            IdAero: result.idAirport,
            Tipo: result.type,
            NombreAero: result.nameAirport,
            Nombre: result.name,
            Descripcion: result.description,
            Ubicacion: result.location,
            Servicios: result.services.map((serv: any) => ({
                Codigo: serv.code,
                Descripcion: serv.description,
                Precio: serv.price,
                NombreTipo: serv.type
            })),
            IdTipoInstalacion: result.idInstallationType
        }
    }

    async function getTypes(): Promise<IFacilityType[]> {
        'use server'
        const response = await fetch(`${typeUrl}/all`, {
            cache: 'no-cache'
        })

        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            Nombre: result.type
        }))
    }

    async function createType(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'Type': formData.get('name')
        })

        const response = await fetch(`${typeUrl}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function createFacility(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'IdAirport': formData.get('idaero'),
            'Name': formData.get('name'),
            'Type': formData.get('type'),
            'Description': formData.get('description'),
            'Location': formData.get('location'),
            'IdInstallationType': formData.get('type')
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
        getTypes,
        createType,
        createFacility,
        updateFacility,
        deleteFacility
    }
}

export default useFacilitiesController