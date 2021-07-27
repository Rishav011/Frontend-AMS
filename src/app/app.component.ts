import { Component } from '@angular/core';
import { LocalisationService } from './shared/localisation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly languages = [
    {name: 'LANGUAGE.EN', value: 'en'},
    {name: 'LANGUAGE.DE', value: 'de'}
  ];

  selectedValue: string;
  opened = false;
  constructor(private translate: LocalisationService) {
    this.selectedValue = translate.setLanguage();
  }

  changeLanguage(): void {
    this.translate.setUserLanguage(this.selectedValue);
  }
}
