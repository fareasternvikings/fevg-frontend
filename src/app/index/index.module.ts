import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {IndexService} from "./services/index.service";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndexComponent
  ],
  providers: [IndexService]
})
export class IndexModule { }
