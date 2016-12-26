import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputTestComponent } from './input-test/input-test.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { EventHandlerDirectiveDirective } from './event-handler-directive.directive';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    InputTestComponent,
    EventEmitterComponent,
    EventHandlerDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
