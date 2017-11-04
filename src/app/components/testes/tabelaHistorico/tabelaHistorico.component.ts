import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'tabelaHistorico',
  templateUrl: './tabelaHistorico.component.html',
  styleUrls: ['./tabelaHistorico.component.css']
})
export class TabelaHistoricoComponent implements OnInit {

  filtroCliente = '';
  filtroTeste = '';
  filtroDia = '';
  filtroHora = '';
  filtroStatus = '';

  historicos: Array<any>;
  numerosPaginacao: Array<number>;
  numero: number = 5;

  constructor() {
  }

  ngOnInit() {
    this.historicos = [
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto2',
        teste: 'regressão',
        dia: '25',
        hora: '18:00',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto1',
        teste: 'regressão',
        dia: '20',
        hora: '10:00',
        status: 'falha',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
      {
        cliente: 'gilberto',
        teste: 'regressão',
        dia: '14',
        hora: '16:40',
        status: 'completo',
        evidencias: '',
      },
    ];

    this.numerosPaginacao = [5, 10, 15, 20, 25, 30];
  }
}
