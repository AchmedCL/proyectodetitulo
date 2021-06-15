import { Model } from "./model.model";

export interface UserData extends Model{
    id: string;
    email: string;

}

export interface profesorDatafirestore extends Model{
    id: string;
    email: string | null;
    nombre: string;
    apellido: string;
    codigoColegio: string | null;
}
export interface profesorData{
    email: string | null;
    password: string;
    nombre: string;
    apellido: string;
    codigoColegio: string | null;
}