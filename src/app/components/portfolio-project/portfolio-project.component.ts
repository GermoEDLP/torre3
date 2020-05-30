import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styles: [
  ]
})
export class PortfolioProjectComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() hrefUrl: string;
  @Input() filter: string;


  constructor() { }

  ngOnInit(): void {
  }

}
