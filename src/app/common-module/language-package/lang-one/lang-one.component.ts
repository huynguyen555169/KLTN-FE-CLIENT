import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-lang-one',
  templateUrl: './lang-one.component.html',
  styleUrls: ['./lang-one.component.scss']
})
export class LangOneComponent implements OnInit, OnChanges {
  @Input() languages: LanguageOneModel[] = [];
  @Output() itemClick = new EventEmitter<LanguageOneModel>();

  currentLanguage: LanguageOneModel;
  drawLanguage: LanguageOneModel[] = [];
  openMenu = false;
  isInside = false;

  @HostListener('document:click', [])
  onDocumentClick() {
    if (!this.isInside && this.openMenu) {
      this.openMenu = false;
    }
    this.isInside = false;
  }

  @HostListener('click', [])
  onElementClick() {
    this.isInside = true;
    this.openMenu = !this.openMenu;
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const { languages } = changes;
    if (
      languages.currentValue &&
      languages.currentValue !== languages.previousValue
    ) {
      this.initData();
    }
  }

  initData() {
    this.currentLanguage = this.getCurrentLanguage() || this.languages[0];
    this.drawLanguage = this.getLanguage();
  }

  handleItemClick(event: MouseEvent, lang: LanguageOneModel) {
    event.stopPropagation();
    this.openMenu = false;
    // Swap language and update display current language
    this.languages = this.languages.map(data => {
      if (data.id === lang.id) {
        data.isCurrent = true;
      } else {
        data.isCurrent = false;
      }
      return data;
    });
    this.initData();
    // Output event click menu item
    this.itemClick.emit(lang);
  }

  getLanguage() {
    return this.languages.filter(x => !x.isCurrent);
  }

  getCurrentLanguage() {
    return this.languages.find(x => x.isCurrent);
  }
}

export class LanguageOneModel {
  id: string | number;
  name: string;
  imageUrl: string;
  isCurrent: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    this.isCurrent = data.isCurrent;
  }
}
