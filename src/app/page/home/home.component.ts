import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakPoint = 3;

  ngOnInit(): void {
    this.breakPoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  handleSize(event: any) {
    this.breakPoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }
}
