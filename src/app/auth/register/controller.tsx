
import { API_URL } from "@/types/constants"

const useRegisterController = () => {
    const url = `${API_URL}User`

    async function registerUser(formData: FormData): Promise<void> {
        'use server'
    
        const name = (formData.get('name') ?? '') as string
        const username = name.split(' ').join('').toLowerCase()
        
        const body = JSON.stringify({
            'Email': formData.get('email'),
            'PasswordHash': formData.get('password'),
            'UserName': username,
            'Name': formData.get('name'),
            'Nationality': formData.get('nationality'),
            'IdClientType': formData.get('type')            
        })
    
        const response = await fetch(`${url}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: body
        })
        console.log(body)
        console.log(response)
        console.log(await response.json())
    }

    return {
        registerUser
    }
}

export default useRegisterController