import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() public text: string = '';

  constructor() { }

  ngOnInit(): void {
    var x: HTMLElement = document.getElementById("toast")!;
    x.className = "show";
    setTimeout(() => { x.className = x.className.replace("show", ""); }, 4000);
  }

}
