import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  activeRoute:string|null= null;
  constructor(router: Router) { 
    this.activeRoute =  router.routerState.snapshot.url;
  }

  ngOnInit(): void {
  }

}
