import { AtivoPortfolioDTO } from "./ativo-portfolio-dto.model";

export interface PortfolioResponseModel {
    usuario_Id: number;
    portifolio_Id: number;
    descricao: string;
    nome: string;
    ativos: AtivoPortfolioDTO[];
  }