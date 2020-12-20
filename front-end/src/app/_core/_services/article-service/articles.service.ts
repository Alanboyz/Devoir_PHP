import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(protected httpClient: HttpClient) {

  }

  getApi<T>(url: string, opts?: HttpParams): Observable<any> {
    let options;
    options = {params: opts};
    return this.httpClient.get<T>(url, options);
  }

  getArticles() {
    return this.getApi(`/api/articles`).pipe(
      map(data => {
        return data;
      })
    );
  }
}
