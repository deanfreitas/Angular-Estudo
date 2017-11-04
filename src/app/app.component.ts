import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {CallTesteService} from './services/callTeste/callTeste.service';
import {ArquivoService} from './services/arquivo/arquivo.service';
import {TipoTesteService} from './services/tipoTeste/tipoTeste.service';
import {SessionService} from './services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SessionService,
    TipoTesteService,
    ArquivoService,
    CallTesteService
  ]
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
