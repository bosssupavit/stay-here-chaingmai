import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-p7ps',
  templateUrl: './p7ps.component.html',
  styleUrls: ['./p7ps.component.scss']
})
export class P7psComponent implements OnInit {
  
  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 250);
  }

}
