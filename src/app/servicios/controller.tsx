import {IService, IServiceType, RepairService} from '@/types/entities'
import { API_URL } from '@/types/constants'

const useServicesController = () => {
    const url = `${API_URL}Services`
    const repairUrl = `${API_URL}RepairService`
    const typeUrl = `${API_URL}ServiceType`

    async function getServices(): Promise<IService[]> {
        'use server'
        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            Codigo: result.code,
            Descripcion: result.description,
            Precio: result.price,
            IdTipo: '',
            NombreTipo: result.type,
            IdInstalacion: result.idInstallations,
            NombreInstalacion: result.installationName
        }))
    }

    async function getRepairServices(): Promise<RepairService[]> {
        'use server'
        const response = await fetch(`${repairUrl}/all`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,
            Codigo: result.code,
            Descripcion: result.description,
            Precio: result.price,
            IdTipo: '',
            NombreTipo: result.type,
            IdInstalacion: result.idInstallations,
            NombreInstalacion: result.installationName
        }))
    }

    async function getService(id: string): Promise<IService> {
        'use server'
        const response = await fetch(`${url}/${id}`)

        const result = await response.json()

        return {
            Id: result.id,
            Codigo: result.code,
            Descripcion: result.description,
            Precio: result.price,
            IdTipo: '',
            NombreTipo: result.type,
            IdInstalacion: result.idInstallations,
            NombreInstalacion: result.installationName
        }
    }

    async function getRepairService(id: string): Promise<RepairService> {
        'use server'
        const response = await fetch(`${repairUrl}/${id}`)

        const result = await response.json()

        return {
            Id: result.id,
            Codigo: result.code,
            Descripcion: result.description,
            Precio: result.price,
            IdTipo: '',
            NombreTipo: result.type,
            IdInstalacion: result.idInstallations,
            NombreInstalacion: result.installationName,
            ServiciosReparacion: result.repairService
        }
    }

    async function createService(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'Code': formData.get('code'),
            'Description': formData.get('description'),
            'Price': parseInt((formData.get('price') ?? '0') as string),
            'IdInstallation': formData.get('idinst'),
            'IdServiceType': formData.get('idservt')
        })

        const response = await fetch(`${url}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function createRepairService(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'Code': formData.get('code'),
            'Description': formData.get('description'),
            'Price': parseInt((formData.get('price') ?? '0') as string),
            'InstallationId': formData.get('idinst'),
            'RepairService': formData.get('idsrepairsvc') ?? []
        })

        console.log(body)

        const response = await fetch(`${repairUrl}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function getTypes(): Promise<IServiceType[]> {
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

    async function updateService(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            'Name': formData.get('name')
        })

        const response = await fetch(`${url}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: body 
        })
    }

    async function deleteService(id: string): Promise<void> {
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
        getServices,
        getRepairServices,
        getService,
        getRepairService,
        getTypes,
        createType,
        createService,
        createRepairService,
        updateService,
        deleteService
    }
}

export default useServicesController