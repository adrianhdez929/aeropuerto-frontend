import {IClient, IClientType, IService} from '@/types/entities'
import clientsData from './data.json'
import { API_URL } from '@/types/constants'

const useClientsController = () => {
    const url = `${API_URL}Client`
    const typeUrl = `${API_URL}ClientType`
    
   async function getClients(): Promise<IClient[]> {
        'use server'

        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        }) 

        const results = await response.json()

        return results.map((result: any) => (
            {
                Id: result.id,
                Nacionalidad: result.nationality,
                Nombre: result.name,
                Tipo: result.type
            }
        ))
    }

    async function getTypes(): Promise<IClientType[]> {
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

    async function getUserServices(id: string): Promise<IService[]> {
        'use server'

        const response = await fetch(`${url}/${id}/services`, {
            cache: 'no-cache'
        }) 

        const results = await response.json()

        return results.services.map((result: any) => (
            {
                Id: result.id,
                Codigo: result.code,
                Descripcion: result.description,
                Precio: result.price,
                IdTipo: '',
                NombreTipo: result.type,
                IdInstalacion: result.idInstallations,
                NombreInstalacion: result.installationName
            }
        ))
    }

    async function createUserService(formData: FormData): Promise<void> {
        'use server'

        const id = (formData.get('client') ?? '') as string

        const body = JSON.stringify({
            'idClient': formData.get('client'),
            'idService': formData.get('service'),
            'comments': formData.get('comments'),
            'rating': ((formData.get('rating') ?? 0) as number) % 10
        })
        
        const response = await fetch(`${url}/add/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })
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

    return {
        getClients,
        getTypes,
        getUserServices,
        createUserService,
        createType
    }
}

export default useClientsController