import {CallTesteService} from '../../../../../../../../services/callTeste/callTeste.service';
import {TestesModel} from '../../../../../../../../models/testes/testes.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'testeProducaoAuto',
  templateUrl: './testeProducaoAuto.component.html',
  styleUrls: ['./testeProducaoAuto.component.css']
})

export class TesteProducaoAutoComponent implements OnInit {
  constructor(private callTesteService: CallTesteService) {
  }

  dadosTeste(usuarioCore: String, senhaCore: String, usuarioPortal: String, senhaPortal: String) {
    const testes = new Array<TestesModel>();

    const testeCore = new TestesModel();
    testeCore.setLogin(usuarioCore);
    testeCore.setSenha(senhaCore);

    const testePortal = new TestesModel();
    testePortal.setLogin(usuarioPortal);
    testePortal.setSenha(senhaPortal);

    testes.push(testeCore);
    testes.push(testePortal);

    this.executarTeste(testes);
  }

  private executarTeste(testes: Array<TestesModel>) {
    this.callTesteService.executarTesteMaisLogin(testes, 'gilberto').then(
      (dados) => this.resposta(dados)
    );
  }

  private resposta(dados: any) {
    alert(dados.mensagem);
    console.log(dados);
  }

  ngOnInit() {
  }
}
