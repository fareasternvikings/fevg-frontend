import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, pluck} from "rxjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class IndexService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.apiUrl}/products`)
      .pipe(
        pluck('data')
      )
  }

  buy() {
    console.log('buy')

    const uuid = uuidv4();
    const url = 'https://api.yookassa.ru/v3/payments';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Idempotence-Key': uuid,
      'Authorization': 'Basic ' + btoa(`${environment.shopId}:${environment.shopKey}`),
      'Access-Control-Allow-Origin': '*'
    });
    const body = {
      amount: {
        value: '2.00',
        currency: 'RUB'
      },
      confirmation: {
        type: 'embedded'
      },
      capture: true,
      description: 'Заказ №72'
    };

    this.http.post(url, body, { headers: headers }).subscribe(response => {
      console.log(response);
    });

  }
}
