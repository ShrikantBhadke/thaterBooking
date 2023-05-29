import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userUrl: string = `${environment.baseUrl}/posts`;
  seatUrl: string = `${environment.baseUrl}/seats`;

  constructor(private _http: HttpClient) {}

  getUserData(): Observable<any> {
    return this._http.get<any>(this.userUrl);
  }

  postUserData(user: any): Observable<any> {
    return this._http.post<any>(this.userUrl, user);
  }

  getSeatData(): Observable<any> {
    return this._http.get<any>(this.seatUrl);
  }

  changeSeatState(id: any, obj: any): Observable<any> {
    return this._http.patch<any>(`${this.seatUrl}/${id}`, obj);
  }
}
