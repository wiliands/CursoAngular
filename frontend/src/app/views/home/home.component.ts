import { TranslocoService } from '@ngneat/transloco';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
      headerService.headerData = {
        title: 'nav.home',
        icon: 'home',
        routeUrl: ''
      }
    }

  ngOnInit(): void {
  }

}
