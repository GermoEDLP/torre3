import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { data } from '../../data/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [],
})
export class PortfolioComponent implements OnInit {
  datas = data;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
