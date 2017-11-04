import {TestesModel} from '../../models/testes/testes.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CallTesteService {

  private inicioUrl = 'http://10.22.47.107:8080/';

  constructor(private http: Http) {
  }

  public executarTesteMaisLogin(testes: Array<TestesModel>, banco: String): Promise<Response> {
    const body = JSON.stringify(testes);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: 'post'});
    const url = this.inicioUrl + banco + '/executarteste/' + testes[0].getTipoTeste();

    return this.http.post(url, body, options)
      .toPromise()
      .then(res => res.json())
      .catch(this.getErro);
  }

  public executarTeste(teste: TestesModel, banco: String): Promise<Response> {
    const body = JSON.stringify(teste);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: 'post'});
    const url = this.inicioUrl + banco + '/executarteste/' + teste.getTipoTeste();

    return this.http.post(url, body, options)
      .toPromise()
      .then(res => res.json())
      .catch(this.getErro);
  }

  private getErro(error: Response): Promise<Response> {
    console.error(error);
    return Promise.reject(error.status || error);
  }
}
