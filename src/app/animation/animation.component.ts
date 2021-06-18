import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'300px',
        backgroundColor:'#938d85'
      })),
      state('close',style({
        height:'200px',
        backgroundColor:'#F4E290 '
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('1.5s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen= ! this.isOpen
  }

}
