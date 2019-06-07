import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  scrolling: boolean

  constructor() { }

  ngOnInit() {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => {
         this.checkScroll();
      });
    }
  }

  checkScroll() {
    if (typeof window !== undefined) {
      if (window.pageYOffset > 20) {
        console.log('scrolled!');
        this.scrolling = true;
      } else if (window.pageYOffset < 20 && this.scrolling) {
        console.log('unscrolled');
      }
    }
  }

}
