import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { routing } from './routes';
import { RouteGuard } from './route-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
