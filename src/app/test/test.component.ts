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
   public event;
   public logMessager;
   public name;
 
  public welcome = "welcome";
  public hasError =true;

   public selector = {
  	"back": this.hasError,
  	"isSpecial": this.hasError,
  	"background":this.hasError
  }

onClick (){
	console.log("Event binding");
	this.event ="Event binding";
}
onClick1 (event){
	console.log(event);
	
}

logMessage(value){
	
	console.log(value);
	this.logMessager =  value;
}
   
}
