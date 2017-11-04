import {AuthService} from '../auth.service';
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  public canActivate(): boolean {
    return this.changeUrl(this.authService.isAuthenticated);
  }

  private changeUrl(isAuthenticated: boolean): boolean {
    if (isAuthenticated) {
      return true;
    } else {
      alert('Esse usuario não esta Autenticado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
