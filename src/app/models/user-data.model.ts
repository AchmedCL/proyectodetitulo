import { Model } from "./model.model";

export interface UserData extends Model{
    id: string;
    email: string;

}

export interface profesorDatafirestore extends Model{
    id: string;
    email: string | null;
    password: string;
    nombre: string;
    apellido: string;
    codigoColegio: string | null;
    publicaciones: string[] | null;
}
export interface profesorData{
    nombre: string;
    apellido: string;
    codigoColegio: string | null;
    password: string;
}