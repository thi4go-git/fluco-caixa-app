import { AutenticacaoService } from "../services/autenticacao.service";

export class LancamentoDTO {
    username: string = '';
    tipo: any;
    descricao: string = '';
    data_referencia: Date | undefined;
    valor_total: number = 0;
    qtde_parcelas: number = 0;
    natureza: any;

    constructor(
        private authService: AutenticacaoService
    ) {
        this.username = this.authService.getUsuarioAutenticado();
    }

}