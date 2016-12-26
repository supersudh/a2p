import { Component,Output,EventEmitter, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements AfterContentInit {
  @Output('clickable') clicked = new EventEmitter <number> ();
  count:number = 0;
  onClicked()
  {
    this.clicked.emit(++this.count);
  }

  ngAfterContentInit()
  {

  }

  ngAfterContentChecked() {
    
  }
}
