import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as myMain from 'src/app/config/main'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu:any [] = myMain.menu
  searchString:string = ""
  searchType:string = "product"
  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  searchSubmit(){
    if(this.searchString != ""){
      if(this.searchType === 'product'){
        window.location.href = "http://shoplikefun.com/category?search=T%C3%ACm+ki%E1%BA%BFm+theo+t%C3%AAn+s%E1%BA%A3n+ph%E1%BA%A9m+%3A+"+this.searchString+"&search_location=0"
      }
      else{
        window.location.href = "http://ohlaalaa.com/shops/"+this.searchString+"?search=T%C3%ACm+ki%E1%BA%BFm+theo+t%C3%AAn+shop+%3A+"+this.searchString+"&search_location=0"
      }
    }
  }

}
