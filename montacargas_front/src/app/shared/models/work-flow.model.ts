export interface WorkFlow
{
    id?:number,
    buildingId:number,
    detailFlow:[{
        rolId:number,
        userId:number,
        order:number
    }]

}