import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuOneModule } from "./common-module/menu-package/menu-one/menu-one.module";
import { NoticOneModule } from "./common-module/notification-package/notic-one/notic-one.module";
import { MenuTwoModule } from "./common-module/menu-package/menu-two/menu-two.module";
import { LangOneModule } from "./common-module/language-package/lang-one/lang-one.module";

import { FooterOneModule } from "./common-module/footer-package/footer-one/footer-one.module";

import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";
import { RootComponent } from './root/root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Popup01Module } from './common-module/form-package/popup01/popup01.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SearchComComponent } from './common-module/search-package/search-com/search-com.component';
import { SearchOneModule } from './common-module/search-package/search-one/search-one.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardProductModule } from './common-module/card-package/card-product/card-product.module';



@NgModule({
  declarations: [RootComponent, SearchComComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuOneModule,
    NoticOneModule,
    MenuTwoModule,
    LangOneModule,
    FormsModule,
    Popup01Module,
    SearchOneModule,
    FooterOneModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CardProductModule,

  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule { }
