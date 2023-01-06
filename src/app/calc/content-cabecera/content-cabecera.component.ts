import { Component } from '@angular/core';

type Categoria = {
  title: string
  name: string
  color: string
}

@Component({
  selector: 'app-content-cabecera',
  templateUrl: './content-cabecera.component.html',
  styleUrls: ['./content-cabecera.component.css']
})
export class ContentCabeceraComponent {
  
  category: Categoria = {
    title: 'Add expense to',
    name: 'Groceries',
    color: '#00c2dd'
  };

}
