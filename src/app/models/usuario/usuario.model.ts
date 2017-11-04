import {GenericoModel} from '../generico.model';

export class UsuarioModel extends GenericoModel {

  private id: any;

  constructor() {
    super();
  }

  public getId(): any {
    return this.id;
  }

  public setId(value: any) {
    this.id = value;
  }
}
