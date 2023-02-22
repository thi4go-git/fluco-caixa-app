export class LancamentoDTO {
    id_usuario: number = 0;
    tipo: any;
    descricao: string = '';
    data_referencia: Date | undefined;
    valor_total: number = 0;
    qtde_parcelas: number = 0;
    natureza: any;
}