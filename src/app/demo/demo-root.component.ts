import { Component, OnInit } from '@angular/core';
import { DemoCommonData } from './demo-common.data';

@Component({
  template:`<router-outlet></router-outlet>`
})
export class DemoRootComponent implements OnInit {

  constructor(_demoCommonData: DemoCommonData) { }

  ngOnInit() {
  }

}