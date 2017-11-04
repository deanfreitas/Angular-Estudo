import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroHistoricoStatus'
})

export class FiltroHistoricoStatusPipe implements PipeTransform {
  transform(historicos: any, arg: any): any {
    return historicos.filter((historico: any) => historico.status.indexOf(arg) > -1)
  }
}
