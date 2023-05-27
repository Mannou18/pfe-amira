import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  OnInit{
  screenWidth!: number;


 public menuDisplay:boolean = false
 public isExpanded: boolean = false;



  constructor( ) {
    this.getScreenSize();

 }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
          this.screenWidth = window.innerWidth;
          // console.log(this.screenWidth);
          if(this.screenWidth <= 959){
            this.isExpanded = true;
          }else{
            this.isExpanded = false;
          }
  }
  ngOnInit(): void {
    // console.log('eeee');
  this.getActiveMenu();

  }


  /***get menu active */
  getActiveMenu(){
    let link_a =  document.querySelectorAll('.menu-g');
    // console.log(link_a.length);
    for (let i = 0; i < link_a.length; ++i) {
    //  console.log( link_a[i].textContent);
    }
  }


}
