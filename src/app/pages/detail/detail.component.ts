import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  @ViewChild('.carousel-item', { static: true }) items;

  id: string;

  project: any;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    this.project = data[this.id];
  }

  ngOnInit(): void {
    console.log(this.items);
  }
}
