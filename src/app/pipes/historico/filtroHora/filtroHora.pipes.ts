import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroHistoricoHora'
})

export class FiltroHistoricoHoraPipe implements PipeTransform {
  transform(historicos: any, arg: any): any {
    return historicos.filter((historico: any) => historico.hora.indexOf(arg) > -1)
  }
}
