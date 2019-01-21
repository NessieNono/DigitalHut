import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	// even number: grey
	// odd number: white

	projects:Project[] = [
		{
			title: "Hiveworks Pitch Website", 
			name: "GalaxyRider", 
			webUrl: "https://galaxyrider.netlify.com", 
			date: "12 January 2019 - Present", 
			description: "My most recent project, a Front-End SPA for presenting a webcomic idea to Hiveworks. I taught myself the Angular Framework and Bootstrap through Udemy courses. This website utilises Angular animations to provide a welcoming and attractive UI, as well as Angular routing, services, parallax scrolling, and responsive navigation menus for a smooth browsing experience.", 
			features:["Angular Features", "Parallax Scrolling","Responsive Photogrid", "Scroll To Top Button with JS"], 
			screenshots:["assets/img/galaxyrider/1.png"]
		},
		{
			title: "MEAN Stack CRUD App", 
			name: "Monotype", 
			webUrl: "http://monotype.netlify.com", 
			date: "12 January 2019 - 19 January 2019", 
			description: "This is a simple full stack application implemented with MongoDB, Express, Angular and Nodejs. I have used Bootstrap and CSS' media queries to make this responsive and able to be viewed on mobile.  Unfortunately, I am unable to deploy the backend, so as of now it can only be explored without manipulating any of the data. ", 
			features:["Mobile Responsive Design", "Performs Create, Read, Update and Delete operations", "Reactive Forms and Input Validation", "Angular Data Binding"], 
			screenshots:["assets/img/monotype/1.png"]
		}, 
		{
			title: "Social Media SPA", 
			name: "Instacram", 
			webUrl: "https://github.com/NessieNono/Instacram/tree/master/frontend", 
			date: "22 October 2018 - 28 October 2018", 
			description: "This is a project assigned to COMP2041 students in Semester 2, 2018, and my first web development project. Students were required to implement the frontend of a social media platform by using pure Vanilla JavaScript and interacting with a backend API. Unfortunately, I have not been able to deploy this online, but screenshots are included below.", 
			features:["Fetching Data from an API", "Login and Registration" , "Feed Interface ", "Live Liking and Commenting", "Infinite Scrolling", "Post, Update and Delete", "Push Notifications", "distinctive, consistent UI"], 
			screenshots:[
				"assets/img/instacram/1.png"
			]
		}, 

	]; 

  constructor() { }

  ngOnInit() {
  }

  getBgColor(i:number) {
  	let white = "#FFFFFF"; 
  	let grey = "#f3f3f3";
  	let BG="";
  	if (i % 2 === 0) { 
  		BG = white;
  	} else {
  		BG = grey;
  	}
  	return {'backgroundColor': BG};
  }

}
