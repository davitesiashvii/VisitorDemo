import { Component, OnInit } from '@angular/core';
import { DemoCommonData } from './demo-common.data';

@Component({
  templateUrl: './demo-root.component.html',
})
export class DemoRootComponent implements OnInit {

  constructor(_demoCommonData: DemoCommonData) { }

  ngOnInit() {
  }

}