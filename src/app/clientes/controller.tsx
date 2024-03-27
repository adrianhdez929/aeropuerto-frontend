'use server'

import {IClient} from '@/types/entities'
import clientsData from './data.json'

const useClientsController = () => {
   async function getClients(): Promise<IClient[]> {
        return clientsData.map((client): IClient => (
            {
                Id: client.id,
                Nacionalidad: client.nacionalidad,
                Nombre: client.nombre
            }
        ))
    }

    return {
        getClients
    }
}

export default useClientsController