import { Component,Output } from '@angular/core';
import { InputTestComponent } from './input-test/input-test.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { UserModel } from './user-model';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "";
  nickName:string = "";
  public userObj = [];
  textName:string = "";
  textAge:number = null;
  textPlace:string = "";
  constructor(logger:LogService) {
    logger.logIt("hey!!! i work bro");
  }

  clickstats(evt)
  {
    console.log(evt);
  }

  insertData() {
    this.userObj.push( new UserModel( this.textName,this.textPlace,this.textAge ) );
    this.textAge = null, this.textName = "", this.textPlace = "";
  }

  test(data) {
    console.log(data);
  }
}
