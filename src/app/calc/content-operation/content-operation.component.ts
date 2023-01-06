import { Component } from '@angular/core';

@Component({
  selector: 'app-content-operation',
  templateUrl: './content-operation.component.html',
  styleUrls: ['./content-operation.component.css']
})
export class ContentOperationComponent {

  valorActual: number = 0;
  valorAnterior: number = 0;
  operador: string = '';
  result: number = 0;
  operaciones: string[] = ['/', '×', '-', '+'];
  mostrar: string = '';

  writetoinput(valor: string): void {
    if (this.operaciones.includes(valor)) {
      this.operador = valor;
      this.valorActual = Number(this.mostrar.substring(1));
      this.mostrar = this.mostrar + valor;
    } else if (valor === '=') {
      console.log(this.mostrar.split(this.operador)[1].substring(1));
      this.valorAnterior = Number(
        this.mostrar.split(this.operador)[1].substring(1)
      );
      this.calculate();
    } else if (valor === 'C') {
      this.borrar_todo();
    } else if (this.mostrar === '' || this.mostrar === '0') {
      this.mostrar = '$' + valor;
    } else if (this.mostrar[this.mostrar.length-1] === this.operador) {
      this.mostrar = this.mostrar + '$' + valor;
    } else {
      this.mostrar = this.mostrar + valor;
    }
  }

  calculate(): void {
    switch (this.operador) {
      case '/':
        this.result = (this.valorActual / this.valorAnterior);
        break;
      case '×':
        this.result = (this.valorActual * this.valorAnterior);
        break;
      case '-':
        this.result = (this.valorActual - this.valorAnterior);
        break;
      case '+':
        this.result = (this.valorActual + this.valorAnterior);
        break;
    }
    this.mostrar = '$' + this.result.toString();
    console.log(`Resultado: ${this.result}`);
  }
 
  borrar_todo(): void {
    this.mostrar = '';
  }
  borrar_datos():void{
      this.mostrar = String(this.mostrar.slice(0,this.mostrar.length-1));

      if (this.valorActual && this.valorActual === 1 && this.valorAnterior === null &&
        this.operador === null) 
      {
        this.valorActual = 0;
      }
  }
}
