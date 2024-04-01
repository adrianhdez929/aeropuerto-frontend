export type LoginCredentials = {
    Id: string
    Token: string
}

export type IAirport = {
    Id: string
    Nombre: string
    Direccion: string
    PosGeo: string
}

export type Repair = {
    Id: string
    Costo: number
    Nave: string
    NaveMatricula: string
    Servicio: string
    ServicioCodigo: string
    FechaInicio: Date
    FechaFinal: Date
    FechaEstimada: Date
    Comentario: string
    Valoracion: number
}

export type Arrival = {
    Id: string
    Llegada: Date
    Salida: Date
    Origen: IAirport
    Destino: IAirport
    Nave: IPlane
    ArriboPropietario: string
}

export type IService = {
    Id: string
    Codigo: string
    Descripcion: string
    Precio: number
    IdTipo: string
    NombreTipo: string
    IdInstalacion: string
    NombreInstalacion: string
}

export type RepairService = IService & {
    NombreTipo: 'Reparacion'
    ServiciosReparacion: string[]
}

export type IServiceType = {
    Id: string
    Nombre: string
}

export type IFacilityType = {
    Id: string
    Nombre: string
}

export type IFacility = {
    Id: string
    IdAero: string
    NombreAero: string
    Nombre: string
    Tipo: string
    Ubicacion: string
    Descripcion: string | null
    Servicios: IService[]
    IdTipoInstalacion: string
}

export type IPlane = {
    Id: string
    NoMatricula: string
    CapCarga: number
    CantTripulantes: number
    Clasificacion: string
    TotalPlazas: number
    Propietario: string
}

export type IClient = {
    Id: string
    Nacionalidad: string
    Nombre: string
    Tipo: string
}

export type IClientType = {
    Id: string,
    Nombre: string
}
