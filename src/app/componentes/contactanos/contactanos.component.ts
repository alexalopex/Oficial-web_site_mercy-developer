import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoDeLaEmpresaService } from '../../servicio/tecnico-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formularioForm: FormGroup;
  datos_formulario: any;
  tecnicos_de_la_empresa: any[] = [];
  errorMensaje: string = '';

  formFields = [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'apellido', label: 'Apellido', type: 'text' },
    { name: 'correo', label: 'Correo electrónico', type: 'email' },
    { name: 'telefono', label: 'Teléfono', type: 'tel' },
    { name: 'mensaje', label: 'Mensaje', type: 'textarea' }
  ];

  constructor(
    private formBuild: FormBuilder, private solicitudFormularioSrv: SolicitudFormularioService, private tecnicoDeLaEmpresaService: TecnicoDeLaEmpresaService 
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit() {
    this.obtenerTecnicos();
  }

  obtenerTecnicos() {
    this.tecnicoDeLaEmpresaService.obtenerTecnicos().subscribe(
      (response:any) => {        
        this.tecnicoDeLaEmpresaService = response.tecnicos; 
        console.log(this.tecnicos_de_la_empresa);
      }, error => {
        console.log(error);
      }
    );
  }

  enviarDatos() {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        alert('Datos guardados correctamente');
        this.formularioForm.reset();
      },
      error => {
        console.log(error);
        this.errorMensaje = 'Error al enviar los datos';
      }
    );
  }
}
