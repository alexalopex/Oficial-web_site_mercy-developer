import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TecnicoDeLaEmpresaService {
  backend = environment.backend + "/tecnicos"; 


  constructor(private http: HttpClient) { }

  obtenerTecnicos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backend}/tecnicos/obtener-tecnicos`);
  }
}
