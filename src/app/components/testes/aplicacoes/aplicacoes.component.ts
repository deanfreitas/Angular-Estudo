import {ArquivoService} from '../../../services/arquivo/arquivo.service';
import {Router} from '@angular/router';
import {TipoTesteService} from '../../../services/tipoTeste/tipoTeste.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'aplicacoes',
  templateUrl: './aplicacoes.component.html',
  styleUrls: ['./aplicacoes.component.css']
})
export class AplicacoesComponent implements OnInit {

  constructor(private tipoTesteService: TipoTesteService, private arquivoService: ArquivoService, private router: Router) {
  }

  public setTipoTeste(tipoTeste: String) {
    this.tipoTesteService.changeTipoTeste(tipoTeste);
    this.tipoTesteService.setNomeTeste(tipoTeste);
  }

  public setNomeDownloadArquivo(nomeArquivo: String) {
    this.arquivoService.setNomeArquivoExcel(nomeArquivo);
  }

  ngOnInit() {
    this.router.navigate(['/aplicacoes/home']);
  }
}
