import { environment } from './../../../environments/environment.qa';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResonse.DTO.model';
import { User } from '../models/User.DTO.model';
import { Routes } from '../globals/routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  get = (): Observable<ApiResponse<User[]>> => this.http.get<ApiResponse<User[]>>(environment.api + Routes.users.list);
}
