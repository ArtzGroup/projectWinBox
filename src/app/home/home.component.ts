import { Component, OnInit } from '@angular/core';
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
  constructor(public globalService: GlobalService) {
  }

  ngOnInit(): void {
    // particlesJS.load(
    //   "particles-js",
    //   "../../assets/config/particlesjs-config.json",
    //   null
    // );

  }
  openWinBox() {
    this.winbox = new WinBox("Controls", {
      mount: document.getElementById("controls"),
      border: 4,
      onclose: function () {
        return !confirm("Close window?");
      }
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
