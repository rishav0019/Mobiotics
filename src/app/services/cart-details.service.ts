import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class CartDetailsService {
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get<any>("assets/data.json").pipe(map((res) => res));
  }
}
