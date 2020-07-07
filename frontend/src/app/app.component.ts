import { Component } from '@angular/core';
import { TranslocoService } from "@ngneat/transloco";
import { CurrentLanguage } from '../environments/CurrentLanguages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private transSrv: TranslocoService) {
    this.transSrv.setActiveLang(CurrentLanguage(navigator.language));
  }

}
