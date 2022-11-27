import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  apiUrl = "https://ossaindenuncia.free.beeceptor.com/get"

  constructor(
    private httpClient: HttpClient
  ) { }

    listarDenuncias(): Observable<any>{
      return this.httpClient.get(this.apiUrl);
    }
}
