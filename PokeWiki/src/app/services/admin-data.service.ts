import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }

  getIsAdmin(): boolean{
    let isAdmin = localStorage.getItem('admin');
    return isAdmin === 'true' ? true : false;
  }

  setIsAdmin(value: boolean){
    localStorage.setItem('admin', value===true ? 'true' : 'false');
  }
}
