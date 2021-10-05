import { Component, OnInit, EventEmitter } from '@angular/core';
import { Transport } from '../Transport';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {
   cl = new EventEmitter<string>()
  transports:Array<Transport>;
  Active:number;
  constructor() { 
    this.Active = 0;
    this.transports = new Array<Transport>();
    this.AddTransport("Ан-225", "Самолёт", 
    "Ан-225 является самым тяжёлым грузовым самолётом, когда-либо поднимавшимся в воздух", 250, 84, 18.2);

    this.AddTransport("БелАЗ-75710", "Автомобиль", 
    "Такие огромные машины, как правило, работают в карьерах, на нефтедобывающих платформах," + 
    " в угледобывающей промышленности России", 810 , 20, 8);

    this.AddTransport("Прелюд", "Корабль", 
    "плавучая платформа для добычи и производства сжиженного природного газа", 600, 458 , 105);
  }
  Click(Type:string){
      for (let i = 0; i < this.transports.length; i++) {
        if(this.transports[i].Type == Type) 
          this.Active = i; 
      }
  }

  AddTransport(Title:string, Type:string, Description:string, 
    Veight:number, Length:number, Height:number){
      this.transports.push(new Transport(Title, Type, Description, Veight, Length, Height));
}

  ngOnInit(): void {
  }

}
