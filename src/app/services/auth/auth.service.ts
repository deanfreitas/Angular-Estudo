import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {

  public isAuthenticated: boolean;

  constructor() {
  }

  public login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isAuthenticated = true);
  }

  public logout(): void {
    this.isAuthenticated = false;
  }
}
