import {GenericoModel} from '../generico.model';

export class TestesModel extends GenericoModel {
  private ambiente: String;
  private excel: File;
  private projeto: String;
  private subProjeto: String;
  private tipoTeste: String;
  private precisaExcel: boolean;

  constructor() {
    super();
  }

  public getAmbiente(): String {
    return this.ambiente
  }

  public setAmbiente(value: String): void {
    this.ambiente = value;
  }

  public getExcel(): File {
    return this.excel;
  }

  public setExcel(value: File): void {
    this.excel = value;
  }

  public getProjeto(): String {
    return this.projeto;
  }

  public setProjeto(value: String): void {
    this.projeto = value;
  }

  public getSubProjeto(): String {
    return this.subProjeto;
  }

  public setSubProjeto(value: String): void {
    this.subProjeto = value;
  }

  public getTipoTeste(): String {
    return this.tipoTeste;
  }

  public setTipoTeste(value: String): void {
    this.tipoTeste = value;
  }

  public getprecisaExcel(): boolean {
    return this.precisaExcel;
  }

  public setprecisaExcel(value: boolean) {
    this.precisaExcel = value;
  }
}
