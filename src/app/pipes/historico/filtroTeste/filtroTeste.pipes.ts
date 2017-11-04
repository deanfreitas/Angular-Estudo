import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroHistoricoTeste'
})

export class FiltroHistoricoTestePipe implements PipeTransform {
  transform(historicos: any, arg: any): any {
    return historicos.filter((historico: any) => historico.teste.indexOf(arg) > -1)
  }
}
