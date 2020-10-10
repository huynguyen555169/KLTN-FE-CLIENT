import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';

export const SupportedLanguages = [
  {
    display: 'English',
    code: 'en'
  },
  {
    display: 'Japanese',
    code: 'ja'
  },
  {
    display: 'Tiếng Việt',
    code: 'vi'
  }
];

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  currentLanguage: string;

  constructor(private translate: TranslateService) {}

  setLanguage(language: string): Observable<any> {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    return this.translate.use(language);
  }

  getLanguage(): string {
    return this.currentLanguage;
  }

  init() {
    this.currentLanguage = localStorage.getItem('language');
    if (!this.currentLanguage) {
      this.translate.addLangs(SupportedLanguages.map(lan => lan.code));

      const browserLang = this.translate.getBrowserLang();

      this.currentLanguage = browserLang.match(/en/)
        ? browserLang
        : SupportedLanguages[0].code;
    }

    this.setLanguage(this.currentLanguage);

    this.translate.onLangChange.subscribe((event: any) => {});
  }

  getText(key: string) {
    return this.translate.instant(key);
  }
}
