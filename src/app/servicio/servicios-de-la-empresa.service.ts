import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiciosDeLaEmpresaService {
  backend = environment.backend + "/servicios_de_la_empresa"; 

  constructor(private http: HttpClient) {}

  obtenerServicios(){
    return this.http.get(`${this.backend}/obtener-servicios`);
  }
}
