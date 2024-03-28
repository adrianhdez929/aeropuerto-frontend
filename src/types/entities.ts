export interface IAirport {
    Id: string
    Nombre: string
    Direccion: string
    PosGeo: string
}

export interface IFacility {
    Id: string
    IdAero: string
    NombreAero: string
    Nombre: string
    Tipo: string
    Ubicacion: string
    Descripcion: string | null
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
