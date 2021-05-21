import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

declare var WinBox: any;
declare var window: any;
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  currentValue: any;
  static currentValue: any;
  winbox: any;
  // currentClass: string = "front";
  constructor(public globalService: GlobalService, private router: Router) {
  }

  ngOnInit(): void {
    // particlesJS.load(
    //   "particles-js",
    //   "../../assets/config/particlesjs-config.json",
    //   null
    // );
  }

  registerUser(form: NgForm) {
    this.globalService.username = form.value.username;
    this.globalService.password = form.value.password;
    this.router.navigate(['/output']);
    this.closeWinBox();
  }


  openWinBox() {
    this.winbox = new WinBox("Controls", {
      mount: document.getElementById("controls"),
      id: "my-window",
      class: ["no-full", "my-theme"],
      root: document.body,
      title: "Options",
      background: "#000",
      border: 4,
      width: 400,
      height: 400,
      x: "center",
      y: "center",
      max: false,
      top: 10,
      left: 10,
      right: 0,
      bottom: 0,
    });
    window.buttons = {
      setValue: function () {
        HomeComponent.hello();
      }
    };

  }
  closeWinBox() {
    this.winbox.close();
  }

  static hello() {
    var x = HomeComponent.currentValue = "testing";
    console.log(x)
  }

}
