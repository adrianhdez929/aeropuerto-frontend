import { API_URL } from "@/types/constants"
import {Repair} from '@/types/entities'

const useRepairController = () => {
    const url = `${API_URL}Repair`
    
    async function getRepairs(): Promise<Repair[]> {
        'use server'
        const response = await fetch(`${url}/all`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.map((result: any) => ({
            Id: result.id,          
            Nave: result.idShip,
            NaveMatricula: result.tuition,
            Costo: result.cost,
            Servicio: result.idService,
            ServicioCodigo: result.code,
            FechaInicio: result.dateInit,
            FechaFinal: result.dateEnd,
            FechaEstimada: result.dateEstimated,
            Comentario: result.comment,
            Valoracion: result.rating,
        }))
    }

    async function getRepair(id: string): Promise<Repair> {
        'use server'

        const response = await fetch(`${url}/${id}`, {
            cache: 'no-cache'
        })
        
        const result = await response.json()

        return {
            Id: result.id,          
            Nave: result.idShip,
            NaveMatricula: result.tuition,
            Costo: result.cost,
            Servicio: result.idService,
            ServicioCodigo: result.code,
            FechaInicio: result.dateInit,
            FechaFinal: result.dateEnd,
            FechaEstimada: result.dateEstimated,
            Comentario: result.comment,
            Valoracion: result.rating,
        }
    }

    async function getPlaneRepairs(id: string): Promise<Repair[]> {
        'use server'
        const response = await fetch(`${url}/repairs/${id}`, {
            cache: 'no-cache'
        })
        
        const results = await response.json()

        return results.repairs.map((result: any) => ({
            Id: result.id,          
            Nave: result.idShip,
            NaveMatricula: result.tuition,
            Costo: result.cost,
            Servicio: result.idService,
            ServicioCodigo: result.code,
            FechaInicio: result.dateInit,
            FechaFinal: result.dateEnd,
            FechaEstimada: result.dateEstimated,
            Comentario: result.comment,
            Valoracion: result.rating,
        }))
    }

    async function rateRepair(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            "id": formData.get('idrepair'),
            "comment": formData.get('comment'),
            'rating': formData.get('rating')
        })

        const response = await fetch(`${url}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })
    }

    async function updateRepair(formData: FormData): Promise<void> {
        'use server'

        // const body = JSON.stringify({
        //     "rating": formData.get('rating'),
        //     "comment": formData.get('comment'),
        //     "dateInit": formData.get('init'),
        //     "dateEnd": formData.get('end'),
        //     "dateEstimated": formData.get('estimate'),
        //     "idService": formData.get('idserv'),
        //     "idShip": formData.get('idship')
        // })

        const body = JSON.stringify({
            "id": formData.get('idrepair'),
            "dateEnd": formData.get('end')
        })

        const response = await fetch(`${url}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })

        console.log(response)
        console.log(await response.json())
    }

    async function createRepair(formData: FormData): Promise<void> {
        'use server'

        const body = JSON.stringify({
            "rating": 0,
            "comment": "",
            "dateInit": new Date(),
            "dateEnd": new Date(),
            "dateEstimated": formData.get('estimate'),
            "idService": formData.get('idserv'),
            "idShip": formData.get('idship')
        })

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })
    }

    return {
        getRepairs,
        getRepair,
        getPlaneRepairs,
        updateRepair,
        rateRepair,
        createRepair
    }
}

export default useRepairController