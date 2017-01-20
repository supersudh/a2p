import { LocComponent } from './location-test/location.component';
import { routing } from './app.routing';
import { LocService } from './location-test/location.service';
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
    EventHandlerDirectiveDirective,
    LocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
