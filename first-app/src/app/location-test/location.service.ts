import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocService {

    path: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.url.subscribe(url => {
            this.path = url[0];
            console.log("path init",this.path);
        });
    }

    get(type: string): Observable<any> {
        return this.activatedRoute[type].subscribe(data => {
            return data;
        });
    }

    set(type: string, value: any): Promise<boolean> {
        if (type === 'params') {
            return this.router.navigate([ this.path, value ]);
        }

        if (type === 'queryParams') {
            return this.router.navigate([ this.path ], { queryParams: value });
        }

        if (type === 'fragment') {
            return this.router.navigate([ this.path ], { fragment: value });
        }
    }

    startURLLister() {
        this.activatedRoute.queryParams.subscribe(data => {
            console.log("qps",data);
        });
    }
} 