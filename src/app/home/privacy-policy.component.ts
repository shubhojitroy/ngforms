import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  pageTitle = 'Privacy policy';
  constructor() {}

  ngOnInit() {}
  onBack() {
    window.history.back();
  }
}
