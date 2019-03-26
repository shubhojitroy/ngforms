import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  pageTitle = 'Terms of use';
  constructor() {}

  ngOnInit() {}

  onBack() {
    window.history.back();
  }
}
