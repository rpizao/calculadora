import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent {

  @Input()
  rotulo: string;

  @Input()
  valor: string;

  visivel: boolean;

  @Output()
  clicar = new EventEmitter<string>();
  
  constructor() {
  }

  exibirRotuloSeHouver(): string {
    return this.rotulo == null ? this.valor : this.rotulo;
  }

  clicado() {
    this.clicar.emit(this.valor);
  }

}
