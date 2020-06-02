import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-top-bars',
  templateUrl: './top-bars.component.html',
  styles: [
  ]
})
export class TopBarsComponent implements OnInit {
  mail = environment.mail;
  constructor() { }

  ngOnInit(): void {
  }

}
