import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoDeLaEmpresaService } from '../../servicio/tecnico-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  formularioForm: FormGroup;
  datos_formulario: any;
  tecnicos: any[] = [];
  
  // Propiedad para mostrar el mensaje de error
  errorMensaje: string = ''; // Inicializarla como cadena vacía o un mensaje predeterminado

  // Definir los campos del formulario
  formFields = [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'apellido', label: 'Apellido', type: 'text' },
    { name: 'correo', label: 'Correo electrónico', type: 'email' },
    { name: 'telefono', label: 'Teléfono', type: 'tel' },
    { name: 'mensaje', label: 'Mensaje', type: 'textarea' }
  ];

  constructor(
    private formBuild: FormBuilder, 
    private solicitudFormularioSrv: SolicitudFormularioService, 
    private tecnicoDeLaEmpresaService: TecnicoDeLaEmpresaService 
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit() {}

  obtenerTecnicos() {
    this.tecnicoDeLaEmpresaService.obtenerTecnicos().subscribe(
      (response: any) => {
        if (response.tecnicos) {
          this.tecnicos = response.tecnicos; 
          console.log(this.tecnicos)
          this.errorMensaje = ''; 
        } else {
          this.errorMensaje = 'No se encontraron técnicos disponibles'; 
        }
      },
      error => {
        console.error(error);
        this.errorMensaje = 'Error al obtener los técnicos'; 
      }
    );
  }

  enviarDatos() {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);        
        alert('Datos guardados correctamente');
        this.formularioForm.reset();
      },
      error => {
        console.log(error);
        this.errorMensaje = 'Error al enviar los datos'; // Mostrar un mensaje de error si hay un problema al enviar el formulario
      }
    );
  }
}
