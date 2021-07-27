import { Injectable } from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class LocalisationService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe(this.storeLanguage);
  }

  setLanguage(): string {
    const lang = this.loadLanguage() || this.translate.getBrowserLang();
    this.setUserLanguage(lang);
    return lang;
  }

  setUserLanguage(language: string): void {
    this.translate.use(language);
  }

  private storeLanguage(event: LangChangeEvent): void {
    localStorage.setItem('lang', event.lang);
  }

  private loadLanguage(): string {
    return localStorage.getItem('lang') || '';
  }
}
