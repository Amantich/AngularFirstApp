import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  public products: any;
  public keyword: string = '';

  constructor() {}

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'computer', price: 4300 },
      { id: 2, name: 'Printer', price: 3252 },
      { id: 3, name: 'Smartphone', price: 2332 },
      { id: 4, name: 'Mouse', price: 5323 },
    ];
  }

  deleteProduct(p: any): void {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }
  search(): void {
    this.products = this.products.filter((p: any) =>
      p.name.includes(this.keyword)
    );
  }
}
