import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filtroHistoricoCliente'
})

export class FiltroHistoricoClientePipe implements PipeTransform {
  transform(historicos: any, arg: any): any {
    return historicos.filter((historico: any) => historico.cliente.indexOf(arg) > -1)
  }
}
