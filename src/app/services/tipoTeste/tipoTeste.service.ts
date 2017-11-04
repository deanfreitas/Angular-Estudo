import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TipoTesteService {

  private nomeTeste: String;
  public changeTipoTeste$: EventEmitter<String>;

  constructor() {
    this.changeTipoTeste$ = new EventEmitter();
  }

  public changeTipoTeste(tipoTeste: String) {
    this.changeTipoTeste$.emit(tipoTeste);
  }

  public getNomeTeste(): String {
    return this.nomeTeste;
  }

  public setNomeTeste(value: String) {
    this.nomeTeste = value;
  }
}
