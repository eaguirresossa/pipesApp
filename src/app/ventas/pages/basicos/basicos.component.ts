import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower:    string = 'edison';
  nombreUpper:    string = 'EDISON';
  nombreCompleto: string = 'EdIson AgUirre SoSSa';

  fecha:          Date = new Date();
}
