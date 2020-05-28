import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {
producto = products;
  constructor() { }

  ngOnInit(): void {
  }

}
