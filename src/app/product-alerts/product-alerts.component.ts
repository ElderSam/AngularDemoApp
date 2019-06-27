import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; /* componente de alertas do produto para receber um produto como entrada */
import { Output, EventEmitter } from '@angular/core'; /*saída */

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; /*definiu uma propriedade nomeada product com um decorador. O decorador indica que o valor da propriedade será transmitido do pai do componente (nesse caso, o componente da lista de produtos).@Input@Input*/

  @Output() notify = new EventEmitter(); /* Isso possibilita que o componente de alerta do produto emita um evento quando o valor da propriedade de notificação for alterado.@Output */


  constructor() { }

  ngOnInit() {
  }

}

