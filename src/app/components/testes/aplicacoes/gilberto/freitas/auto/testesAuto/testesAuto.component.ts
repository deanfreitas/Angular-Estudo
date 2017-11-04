import {ArquivoService} from '../../../../../../../services/arquivo/arquivo.service';
import {TipoTesteService} from '../../../../../../../services/tipoTeste/tipoTeste.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'testesAuto',
  templateUrl: './testesAuto.component.html',
  styleUrls: ['./testesAuto.component.css']
})
export class TestesAutoComponent implements OnInit {
  constructor(private tipoTesteService: TipoTesteService, private arquivoService: ArquivoService) {
  }

  public setTipoTeste(tipoTeste: String) {
    this.tipoTesteService.changeTipoTeste(tipoTeste);
    this.tipoTesteService.setNomeTeste(tipoTeste);
  }

  public setNomeDownloadArquivo(nomeArquivo: String) {
    this.arquivoService.setNomeArquivoExcel(nomeArquivo);
  }

  ngOnInit() {
  }
}
