import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Template forms';
  constructor() {}

  ngOnInit() {}
}
