import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project-winbox';
  particlesOptions = {
    particles: {
      color: {
        value: [ '#ff0000', '#0000ff' ]
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 5
      }
    }
  };
  ngOnInit(){
    particlesJS.load(
       "particles-js",
       "../../assets/config/particlesjs-config.json",
       null
     );
  }
  
}
