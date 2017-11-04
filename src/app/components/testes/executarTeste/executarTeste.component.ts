import {ArquivoService} from '../../../services/arquivo/arquivo.service';
import {CallTesteService} from '../../../services/callTeste/callTeste.service';
import {TestesModel} from '../../../models/testes/testes.model';
import {Router} from '@angular/router';
import {TipoTesteService} from '../../../services/tipoTeste/tipoTeste.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'executarTeste',
  templateUrl: './executarTeste.component.html',
  styleUrls: ['./executarTeste.component.css']
})
export class ExecutarTesteComponent implements OnInit {

  ambientes: Array<String>;
  teste: String;
  banco: String;
  private testeUsuario: TestesModel = new TestesModel();

  constructor(private callTesteService: CallTesteService, private tipoTesteService: TipoTesteService,
              private arquivoService: ArquivoService, private router: Router) {
  }

  private getTipoTeste(tipoTeste: String): void {
    this.teste = tipoTeste
  }

  public dadosTeste(ambienteSistema: String, usuarioSistema: String, senhaSistema: String): void {
    if (ambienteSistema == null || ambienteSistema === '') {
      alert('Precisa selecionar um ambiente para o teste');
    } else if (usuarioSistema == null || usuarioSistema === '') {
      alert('Precisa digitar um usuario para testar o sistema');
    } else if (senhaSistema == null || senhaSistema === '') {
      alert('Precisa de uma senha para testar o sistema');
    } else {
      this.testeUsuario.setAmbiente(ambienteSistema);
      this.testeUsuario.setLogin(usuarioSistema);
      this.testeUsuario.setSenha(senhaSistema);
      this.testeUsuario.setprecisaExcel(this.arquivoService.getPrecisaExcel());

      this.executarTeste(this.testeUsuario);
    }
  }

  private executarTeste(teste: TestesModel) {
    this.callTesteService.executarTeste(teste, this.banco).then(
      (dados) => this.resposta(dados)
    );
  }

  private resposta(dados: any) {
    if (dados.mensagem != null) {
      alert(dados.mensagem);
    }
    console.log(dados);
  }

  ngOnInit() {
    this.ambientes = ['', 'PRO', 'HML', 'DSV', 'ROTFIX', 'PRODUÇÃO'];
    this.arquivoService.setPrecisaExcel(false);
    this.tipoTesteService.changeTipoTeste$.subscribe((tipoTeste: any) => this.getTipoTeste(tipoTeste));

    const ambiente = this.router.url.replace('/aplicacoes/', '');
    if (ambiente.indexOf('/') > 0) {
      const nomesTeste: Array<String> = ambiente.split('/');
      this.banco = nomesTeste[0];
      if (nomesTeste.length === 4) {
        this.testeUsuario.setSubProjeto(nomesTeste[2]);
      } else {

      }

      this.testeUsuario.setProjeto(nomesTeste[1]);
      this.testeUsuario.setTipoTeste(this.tipoTesteService.getNomeTeste());
      this.teste = this.tipoTesteService.getNomeTeste();
    }
  }

  ngOnDestroy() {
  }
}
