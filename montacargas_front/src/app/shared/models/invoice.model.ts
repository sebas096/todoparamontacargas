import { HistoricApproval } from "./historic-approval.model";

export interface Invoice
{
    id:number,
    orden: number,
    pacoFormat: string,
    active: number,
    buildingId:number,
    buildingName:string

}