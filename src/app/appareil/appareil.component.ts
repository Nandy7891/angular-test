import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from './../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
    
    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() appareilDescription: string;
    @Input() index: number;
    @Input() id: number;
    
  constructor( private appareilService: AppareilService) { }

  ngOnInit() {
  }
  
  getStatus(){
    return this.appareilStatus;
  }
  
  getColor(){
       if(this.appareilStatus === 'alumé'){
            return'green';
       } else if(this.appareilStatus === 'eteint'){
            return'#eee';
       }
    }
    getBorder(){
     if(this.appareilStatus === 'alumé'){
          return'1px solid gray';
     } else if(this.appareilStatus === 'eteint'){
          return'1px solid #FFF';
     }
  }
    getBackground(){
     if(this.appareilStatus === 'alumé'){
          return'lightgray';
     } else if(this.appareilStatus === 'eteint'){
          return'gray';
     }
  } 
    onSwitch() {
        if(this.appareilStatus === 'allumé') {
          this.appareilService.switchOffOne(this.index);
        } else if(this.appareilStatus === 'éteint') {
          this.appareilService.switchOnOne(this.index);
        }
    }
}
