import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  toHome()
  {
    this.route.navigate(['/']);
  }

}
