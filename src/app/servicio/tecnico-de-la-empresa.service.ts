import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnicoDeLaEmpresaService {
  backendUrl = `${environment.backend}/tecnicos`;
  constructor(private http: HttpClient) { }

  obtenerTecnicos(): Observable<any> {
    return this.http.get(`${this.backendUrl}/obtener-tecnicos`); 
  }
}
