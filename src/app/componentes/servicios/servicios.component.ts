import { Component } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../servicio/servicios-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios: any[] = [];
  constructor(private serviciosDeLaEmpresaSrv: ServiciosDeLaEmpresaService) { }

  ngOnInit(): void {
    
    this.serviciosDeLaEmpresaSrv.obtenerServicios().subscribe(
      (response: any) => {
        this.servicios = response; 
      },
      (error) => {
        console.error('Error al obtener los servicios:', error);
      }
    );
  }
}
