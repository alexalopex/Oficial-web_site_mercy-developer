import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TecnicoDeLaEmpresaService {
  backend = environment.backend + "/tecnicos_de_la_empresa"; 


  constructor(private http: HttpClient) { }

  obtenerTecnicos(){
  return this.http.get(`${environment.backend}/obtener-tecnicos`);
  }
}
