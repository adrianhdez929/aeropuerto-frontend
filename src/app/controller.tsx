import { cookies } from "next/headers"

import { IClient } from "@/types/entities"
import { API_URL } from "@/types/constants"

const useAppController = () => {
    const userUrl = `${API_URL}Client` 
    
    async function getCurrentUser(): Promise<IClient> {
        'use server'

        const userId = cookies().get('user-id')?.value ?? ''

        const response = await fetch(`${userUrl}/${userId}`)

        const result = await response.json()

        return {
            Id: userId,
            Nombre: result.name,
            Nacionalidad: result.nationality,
            Tipo: result.type
        }
    }
    
    return {
        getCurrentUser
    }
}

export default useAppController