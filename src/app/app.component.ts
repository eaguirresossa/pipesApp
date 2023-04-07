import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  // nombre:     string = 'Edison aguirre s';
  // valor:      number = 1000;
  // obj = {
  //   nombre: 'EAS'
  // }

  // mostrarNombre(){
  //   console.log( this.nombre);
  //   console.log( this.valor);
  //   console.log( this.obj);
  // }


}
