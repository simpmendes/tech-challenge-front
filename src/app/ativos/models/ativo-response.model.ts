import { AtivoTipoResponseModel } from "./ativo-tipo-response.model";

export interface AtivoResponseModel {
    id: number;
    nome: string;
    sigla: string;
    ativoTipo: AtivoTipoResponseModel;
}