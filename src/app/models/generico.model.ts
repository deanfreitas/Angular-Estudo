export class GenericoModel {

  private login: String;
  private senha: String;

  constructor() {
  }

  public getLogin(): String {
    return this.login;
  }

  public setLogin(value: String) {
    this.login = value;
  }

  public getSenha(): String {
    return this.senha;
  }

  public setSenha(value: String) {
    this.senha = value;
  }
}
