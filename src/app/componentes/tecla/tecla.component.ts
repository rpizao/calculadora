import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit {

  @Input()
  valor: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  private descricaoDaTecla(): string {
    return `Valor [${this.valor}]!`;
  }

  exibirMensagemNoConsole(): void {
    console.log(this.descricaoDaTecla());
  }

}
