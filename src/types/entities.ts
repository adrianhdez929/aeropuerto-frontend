export interface IAirport {
    Id: number
    Nombre: string
    Direccion: string
    PosGeo: string
}

export interface IFacility {
    Id: number
    IdAero: number
    Nombre: string
    Tipo: string
    Ubicacion: string
}

export interface IPlane {
    NoMatricula: number
    CapCarga: number
    CantTripulantes: number
    Clasificacion: string
    TotalPlazas: number
}

export interface IClient {
    Id: number
    Nacionalidad: string
    Nombre: string
}
