import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, pluck} from "rxjs";

@Injectable()
export class IndexService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.apiUrl}/products`)
      .pipe(
        pluck('data')
      )
  }
}
