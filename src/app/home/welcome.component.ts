import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  pageTitle = 'Welcome';
  constructor() {}

  ngOnInit() {}
}
