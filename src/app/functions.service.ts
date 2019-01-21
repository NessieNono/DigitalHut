import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

	adjustedScroll(el:string){
		let element = document.getElementById(el);

		let elementPosition = element.getBoundingClientRect().top;
		let navbar = document.getElementById("navbar"); 
		let navbarHeight = navbar.getBoundingClientRect().height;

    	window.scrollBy({top: elementPosition-navbarHeight, behavior: "smooth"});
	}
}
