import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { CardOneModule } from 'src/app/common-module/card-package/card-one/card-one.module';
import { SearchMaxMinTwoModule } from 'src/app/common-module/search-package/search-max-min-two/search-max-min-two.module';



@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    CardOneModule, SearchMaxMinTwoModule, MatSelectModule
  ]
})
export class WalletModule { }
