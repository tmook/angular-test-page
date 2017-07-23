import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mutable-data-table',
  templateUrl: './mutable-data-table.component.html',
  styleUrls: ['./mutable-data-table.component.css']
})
export class MutableDataTableComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
