import { Component } from '@angular/core';

@Component({
  selector: 'app-content-fecha',
  templateUrl: './content-fecha.component.html',
  styleUrls: ['./content-fecha.component.css']
})
export class ContentFechaComponent {
  
  options : Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  today = new Date();

  fecha : any = this.today.toLocaleString('en-US', this.options);
}
