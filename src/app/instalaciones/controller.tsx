'use server'

import {IFacility} from '@/types/entities'
import facilitiesData from './data.json'

const useFacilitiesController = () => {
   async function getFacilities(): Promise<IFacility[]> {
        return facilitiesData.map((facility): IFacility => (
            {
                Id: facility.id,
                IdAero: facility.id_aero,
                Nombre: facility.nombre,
                Tipo: facility.tipo,
                Ubicacion: facility.ubicacion
            }
        ))
    }

    return {
        getFacilities
    }
}

export default useFacilitiesController