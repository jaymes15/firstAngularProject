import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   title = 'test component';
   public inputid = "text";
   public inputid1 = "text1";
   public isDisabled = false;
 
  public welcome = "welcome";
  public hasError =true;
   public selector = {
  	"back": this.hasError,
  	"isSpecial": this.hasError,
  	"background":this.hasError
  }
   }
