import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
import { language } from '../environments/languages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private transSrv: TranslocoService) {
    this.transSrv.setActiveLang(language(navigator.language));
  }

}
