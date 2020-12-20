import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get currentUser(): string {
    return this._currentUser;
  }

  set currentUser(value: string) {
    this._currentUser = value;
  }

  private _currentUser: string;
  globalHeader: HttpHeaders;

  constructor(protected httpClient: HttpClient, protected router: Router) {
  }

  postApi<T>(url: string, body: any, opts?: any): Observable<any> {
    const options = {params: opts, headers: this.globalHeader};
    return this.httpClient.post<T>(url, body, options);
  }

  userInscription(user): Observable<any> {
    return this.postApi<any>(
      `${''}`,
      user
    );
  }

  userToggleConnect(user?) {
    if (this.currentUser && !user) {
      this.currentUser = null;
    }else{
    this.currentUser = user;
    }
  }

}
