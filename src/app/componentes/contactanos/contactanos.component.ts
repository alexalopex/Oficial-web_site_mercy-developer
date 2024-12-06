import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoDeLaEmpresaService } from '../../servicio/tecnico-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  tecnicos:any[] = [];
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv:SolicitudFormularioService,private tecnicoDeLaEmpresaService: TecnicoDeLaEmpresaService ){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(): void{
    this.tecnicoDeLaEmpresaService.obtenerTecnicos().subscribe(
      (response: any) => {
        console.log('Respuesta del servicio: ', response);
        this.tecnicos = response;
        if (this.tecnicos && this.tecnicos.length > 0) {
          console.log('Tecnicos cargados: ', this.tecnicos);
        } else {
          console.error('No se encontraron técnicos.');
        }
      },
      (error) => {
        console.error('Error al obtener los técnicos:', error);
      }
    );
  }
  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }

}
