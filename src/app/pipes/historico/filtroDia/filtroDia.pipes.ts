import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroHistoricoDia'
})

export class FiltroHistoricoDiaPipe implements PipeTransform {
  transform(historicos: any, arg: any): any {
    return historicos.filter((historico: any) => historico.dia.indexOf(arg) > -1)
  }
}
