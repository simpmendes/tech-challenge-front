import { AtivoResponseModel } from "./ativo-response.model";

export interface TransacaoResponseModel {
    portifolio_Id: number;
    tipoTransacao: number;
    nomeTipoTransacao: string | null;
    quantidade: number;
    preco: number;
    dataTransacao: string;
    ativo: AtivoResponseModel | null;
}