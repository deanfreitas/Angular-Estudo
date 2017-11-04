import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {SessionService} from '../../services/session/session.service';
import {UsuarioModel} from '../../models/usuario/usuario.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario = new UsuarioModel();

  constructor(private sessionService: SessionService, private authService: AuthService, private router: Router) {
  }

  public logarUsuario(): any {
    this.sessionService.getUsuario(this.usuario)
      .then(dados => this.resposta(dados))
      .catch(error => console.log(error)
      );
  }

  private resposta(dados) {
    console.log(dados);
    if (dados.mensagem != null) {
      alert(dados.mensagem);
    } else {
      this.authService.login().subscribe(() => {
        if (this.authService.isAuthenticated) {
          this.router.navigate(['/aplicacoes/home']);
        } else {
          this.router.navigate(['/login'])
        }
      });
    }
  }

  ngOnInit() {
  }
}
