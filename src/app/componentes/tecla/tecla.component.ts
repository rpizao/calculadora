import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit {

  @Input()
  rotulo: string;

  @Input()
  valor: string;

  @Output()
  clicar = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  exibirRotuloSeHouver(): string {
    return this.rotulo == null ? this.valor : this.rotulo;
  }

  clicado() {
    this.clicar.emit(this.valor);
  }

}
