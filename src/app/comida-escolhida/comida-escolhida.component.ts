import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comida-escolhida',
  templateUrl: './comida-escolhida.component.html',
  styleUrls: ['./comida-escolhida.component.css']
})
export class ComidaEscolhidaComponent implements OnInit {


  @Input() imagemAmpliada;

  constructor() { }

  ngOnInit() {
  }


}
