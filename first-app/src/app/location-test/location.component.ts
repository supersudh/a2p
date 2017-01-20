import { LocService } from './location.service';
import { Component } from '@angular/core';

@Component({
    selector: "app-loc",
    template: ``,
    providers: [LocService]
})
export class LocComponent {
    constructor (
        private locService: LocService
    )
    {
        locService.set("queryParams",{name:'sudharsan'}).then(() => {
            locService.startURLLister();
        });
        
        setTimeout(() => {
          locService.set("queryParams",{name:'sudharsan', age: 22});
          setTimeout(() => {
            locService.set("queryParams",{name:'sudharsan', age: 22, sex:'male'});
            },3000);
        },3000);
    }
}