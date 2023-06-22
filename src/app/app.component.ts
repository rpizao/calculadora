import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorDaOperacao = "";
  
  adicionarValor(event: any): void {
    this.valorDaOperacao += event.currentTarget.textContent;
  }

}
