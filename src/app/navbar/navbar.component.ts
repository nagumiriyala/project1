import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"],

})
export class NavbarComponent{
    name="Rama";
    img={
        src:"https://images.unsplash.com/photo-1564139236506-6d9fdd578624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop&w=1000&h=1000&q=80",
        alt:"image"
    };

}