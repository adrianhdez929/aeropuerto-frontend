'use server'

import {IAirport} from '@/types/entities'
import airportsData from './data.json'

const useAirportController = () => {
   async function getAirports(): Promise<IAirport[]> {
        return airportsData.map((airport): IAirport => (
            {
                Id: airport.id,
                Nombre: airport.nombre,
                Direccion: airport.direccion,
                PosGeo: airport.pos_geo
            }
        ))
    }

    return {
        getAirports
    }
}

export default useAirportController