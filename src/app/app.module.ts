import {ArquivoExcelComponent} from './components/testes/executarTeste/arquivoExcel/arquivoExcel.component';
import {TesteProducaoAutoComponent} from './components/testes/aplicacoes/gilberto/freitas/auto/testesAuto/testeProducaoAuto/testeProducaoAuto.component';
import {TestesAutoComponent} from './components/testes/aplicacoes/gilberto/freitas/auto/testesAuto/testesAuto.component';
import {FiltroHistoricoStatusPipe} from './pipes/historico/filtroStatus/filtroStatus.pipes';
import {FiltroHistoricoHoraPipe} from './pipes/historico/filtroHora/filtroHora.pipes';
import {FiltroHistoricoDiaPipe} from './pipes/historico/filtroDia/filtroDia.pipes';
import {FiltroHistoricoTestePipe} from './pipes/historico/filtroTeste/filtroTeste.pipes';
import {FiltroHistoricoClientePipe} from './pipes/historico/flitroCliente/filtroCliente.pipes';
import {TabelaHistoricoComponent} from './components/testes/tabelaHistorico/tabelaHistorico.component';
import {ExecutarTesteComponent} from './components/testes/executarTeste/executarTeste.component';
import {AplicacoesComponent} from './components/testes/aplicacoes/aplicacoes.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth/authGuard/authGuard.service';
import {LoginComponent} from './components/login/login.component';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TesteProducaoAutoComponent,
    TestesAutoComponent,
    AplicacoesComponent,
    ExecutarTesteComponent,
    ArquivoExcelComponent,
    TabelaHistoricoComponent,
    FiltroHistoricoClientePipe,
    FiltroHistoricoTestePipe,
    FiltroHistoricoDiaPipe,
    FiltroHistoricoHoraPipe,
    FiltroHistoricoStatusPipe
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'aplicacoes',
        component: AplicacoesComponent,
        canActivate: [AuthGuardService],
        children: [{
          path: 'home',
          component: TabelaHistoricoComponent
        },
          {
            path: 'gilberto/pe',
            component: ExecutarTesteComponent,
          },
          {
            path: 'gilberto/freitas',
            component: ExecutarTesteComponent,
            children: [{
              path: 'auto/geradorProposta',
              component: ArquivoExcelComponent,
            },
              {
                path: 'auto/testeRegressao',
                component: ArquivoExcelComponent,
              },
              {
                path: 'auto/dadosComplementar',
                component: ArquivoExcelComponent,
              },
              {
                path: 'auto/analiseDocumentalTeste',
                component: ArquivoExcelComponent,
              },
              {
                path: 'auto/ajusteDocumentos',
                component: ArquivoExcelComponent,
              },
              {
                path: 'auto/testeFormalizacao',
                component: ArquivoExcelComponent,
              },
            ]
          },
          {
            path: 'gilberto/pf',
            component: ExecutarTesteComponent,
            children: [{
              path: 'gerarRelatorio',
              component: ArquivoExcelComponent,
            },
            ]
          },
          {
            path: 'gilberto/freitas/auto',
            component: TestesAutoComponent,
          },
          {
            path: 'gilberto/freitas/auto/testeProducaoAuto',
            component: TesteProducaoAutoComponent,
          },
          {
            path: 'gilberto2/testeProducao',
            component: ExecutarTesteComponent,
          },
          {
            path: 'gilberto3/testeProducao',
            component: ExecutarTesteComponent,
          }
        ],
      }
    ])
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
