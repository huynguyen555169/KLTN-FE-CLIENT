import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixPipe } from './prefix-pipe/prefix.pipe';
import { PostfixPipe } from './postfix-pipe/postfix.pipe';

@NgModule({
  declarations: [PrefixPipe, PostfixPipe],
  imports: [CommonModule],
  exports: [PrefixPipe, PostfixPipe]
})
export class StringPipeModule {}
