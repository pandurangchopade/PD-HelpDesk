import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const myTest: any;
@Component({
  selector: 'app-video-conference',
  templateUrl: './video-conference.component.html',
  styleUrls: ['./video-conference.component.css']
})
export class VideoConferenceComponent implements OnInit {
  roomname: any;
  displayname: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnGo() {
    debugger

    if (this.roomname != undefined && this.roomname != "" && this.displayname != undefined && this.displayname != "") {
      myTest(this.roomname, this.displayname);
    } else {
      alert("Please fill room and display name");
    }
  }
}
