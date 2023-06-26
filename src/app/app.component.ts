import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static readonly VAZIO_DEFAULT = "";

  valorDaOperacao = AppComponent.VAZIO_DEFAULT;
  
  acionarTecla(valorOuOperacao: string): void {
    if(valorOuOperacao == "C") {
      this.valorDaOperacao = AppComponent.VAZIO_DEFAULT;
    }
    else if(valorOuOperacao == "=") {
      try {
        this.valorDaOperacao = eval(this.valorDaOperacao);
      }
      catch(erro){
        alert("Operação é inválida, fio!");
      }
    }
    else {
      this.valorDaOperacao += valorOuOperacao;
    }

    console.log(this.valorDaOperacao);
  }

}
