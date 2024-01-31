import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { NavbarComponent } from './shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'Fly cart | Shop ...';

  shouldDisplayNavBar:boolean = true;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/login') {
        this.shouldDisplayNavBar = false;
      } else {
        this.shouldDisplayNavBar = true;
      }
    });
  }
}
