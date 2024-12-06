import { Component, OnInit } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../servicio/servicios-de-la-empresa.service';
import { error } from 'console';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  errorMensaje: string = '';

  constructor(private serviciosDeLaEmpresaService: ServiciosDeLaEmpresaService) {}

  ngOnInit() {
    this.obtenerServicios();
  }

  obtenerServicios() {
    this.serviciosDeLaEmpresaService.obtenerServicios().subscribe(
      (response: any) => {
        if (response.servicios) {
          this.servicios = response.servicios;
          this.errorMensaje = ''; 
        } else {
          this.errorMensaje = 'No se encontraron servicios disponibles';
        }
      },
      error => {
        console.error(error);
        this.errorMensaje = 'Error al obtener los servicios';
      }
    );
  }
}
