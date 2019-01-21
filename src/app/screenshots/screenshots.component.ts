import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {

	instacramScreenshots:String[] = [
		"assets/img/instacram/screenshots/1.png", 
		"assets/img/instacram/screenshots/2.png",
		"assets/img/instacram/screenshots/3.png",
		"assets/img/instacram/screenshots/4.png",
		"assets/img/instacram/screenshots/5.png",
		"assets/img/instacram/screenshots/6.png",
		"assets/img/instacram/screenshots/7.png",
		"assets/img/instacram/screenshots/8.png",
		"assets/img/instacram/screenshots/9.png",
		"assets/img/instacram/screenshots/10.png",
		"assets/img/instacram/screenshots/11.png",
		"assets/img/instacram/screenshots/12.png",
		"assets/img/instacram/screenshots/13.png",
	]
  constructor() { }

  ngOnInit() {
  }

  closeBox(el:string) { 
  	let element = document.getElementById(el); 
  	element.classList.add("hide");
  	let button = document.getElementById("showNote"); 
  	button.classList.remove("hide")
  }
  openBox(el:string) {
  	let element = document.getElementById(el); 
  	element.classList.remove("hide")
  	let button = document.getElementById("showNote"); 
  	button.classList.add("hide");
  }

}
