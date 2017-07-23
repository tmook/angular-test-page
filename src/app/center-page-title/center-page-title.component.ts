import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center-page-title',
  templateUrl: './center-page-title.component.html',
  styleUrls: ['./center-page-title.component.css']
})
export class CenterPageTitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
