import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Edison';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['maria', 'pedrolo', 'juan', 'karla', 'julius'];

  clientesMapa = {
    '=0': 'no tenemos ningín cliente esperando.',
    '=1': 'tenemos un (1) cliente esperando.',
    '=2': 'tenemos dos (2) cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    if(this.genero==='masculino'){
      this.nombre = 'Juli';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Edison';
    this.genero = 'masculino';
    }

  }

  borrarCliente(){
    this.clientes.pop();
  }

  resetClientes(){
    //this.clientes = [];
    this.clientes = ['maria', 'pedrolo', 'juan', 'karla', 'julius'];
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Edison',
    apellido: 'Aguirre',
    direccion: 'Rionegro, Colombia'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async pipe
  miObservable = interval(5000); // imprime 0,1,2,3,4,....
  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout( () => {
      resolve('Fin de la promesa...');
    }, 3500);
  });
}
