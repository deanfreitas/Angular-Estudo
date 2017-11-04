import {UsuarioModel} from '../../models/usuario/usuario.model';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import './../../rxjs-extensions';


@Injectable()
export class SessionService {

  private usuarioLogado: UsuarioModel;
  private url = 'http://10.22.47.107:8080/gilberto/';

  constructor(private router: Router, private http: Http) {
  }

  public getUsuario(usuario: UsuarioModel): Promise<Object> {
    const body = JSON.stringify(usuario);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: 'post'});

    return this.http.post(this.url + 'logar/usuario', body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.getErro);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private getErro(error: Response) {
    console.error(error);
    return Promise.reject(error.status || error);
  }
}
