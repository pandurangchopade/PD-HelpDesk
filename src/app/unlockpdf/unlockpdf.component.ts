import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-unlockpdf',
  templateUrl: './unlockpdf.component.html',
  styleUrls: ['./unlockpdf.component.css']
})
export class UnlockpdfComponent implements OnInit {
  fileToUpload: File = null;
  fileName: string;
  constructor() { }

  ngOnInit(): void {

  }

  clickEventForfile() {
    document.getElementById('chooseFile').click();
  }
  handleFile(files: FileList) {
    debugger
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;

    

    // this.fileToUpload.arrayBuffer().then(res => {
    //   const abc = res;

    // });

    // const xyz=this.fileToUpload..toString();

  }

}
