import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {IndexService} from "./services/index.service";
import {TuiCurrencyPipeModule} from "@taiga-ui/addon-commerce";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    TuiCurrencyPipeModule
  ],
  exports: [
    IndexComponent
  ],
  providers: [IndexService]
})
export class IndexModule { }
