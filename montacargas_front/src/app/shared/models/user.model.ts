export interface User
{
    id?: number,
    name:string,
    lastName: string,
    email: string,
    password?: string,
    active: number,
    updateAt: string,
    create: string,
    verified: number,
    idRol: number,
    buildings: number[]
}