import { NaturezaDTO } from "./naturezaDTO";

export class LancamentoDTOResponse {
    id: number = 0;
    tipo: any;
    descricao: string = '';
    data_lancamento: any;
    valor_parcela: number = 0;
    qtde_parcelas: number = 0;
    nr_parcela: number = 0;
    situacao: any;
    natureza: NaturezaDTO = new NaturezaDTO();
}