import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {IndexService} from "./services/index.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  products$: Observable<any>

  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
    this.products$ = this.indexService.getProducts()
  }

}
