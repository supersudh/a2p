import { Component, Input, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { EventHandlerDirectiveDirective } from '../event-handler-directive.directive';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnChanges,OnInit,DoCheck,OnDestroy {
  @Input('realName') name: string;
  @Input('realName2') nickName: string;

  ngOnChanges(data)
  {
    console.log("here in on changes",data);
  }

  ngOnInit()
  {
    console.log("AM INIT BRO!");
  }

  ngDoCheck()
  {
    console.log("AM HEEre in ngDoCheck");
  }

  ngOnDestroy() {
    console.log("AM DESTROYD :(");
  }

}
