import { API_URL } from "@/types/constants"
import { LoginCredentials } from "@/types/entities"
import { cookies } from "next/headers"

const useLoginController = () => {
    const url = `${API_URL}Auth`
    async function loginUser(formData: FormData): Promise<LoginCredentials> {
        'use server'

        const body = JSON.stringify({
            'email': formData.get('email'),
            'password': formData.get('password')
            
        })

        const response = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        
        const result = await response.json()

        const credentials: LoginCredentials = {
            Id: result.idClient,
            Token: result.token
        } 

        cookies().set('accesss-token', credentials.Token)
        cookies().set('user-id', credentials.Id)

        return credentials 
    }

    return {
        loginUser
    }
}

export default useLoginController