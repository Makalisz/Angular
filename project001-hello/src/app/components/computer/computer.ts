import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-computer',
  styleUrl: './computer.css',
  templateUrl: './computer.html',
})
export class Computer {
  cpu: string = 'Intel Core i7';
  ram: number = 16;
  ssd: number = 240;
  grafikaBool: boolean = true;
  grafika: string = 'GeForce RTX 5090';
  cena: number = 6000;

  increaseRam(){
    if(this.ram <= 32){
      this.ram = this.ram * 2;
      this.cena = this.cena + 600
    }
  }

  decreaseRam(){
    if(this.ram >= 2){
      this.ram = this.ram / 2;
      this.cena = this.cena - 600
    }
  }

  zmienGrafike(){
    if(this.grafikaBool == true){
      this.grafika = 'GeForce RTX 5090';
      this.grafikaBool = false;
      this.cena = this.cena + 2000
    } 
    else if(this.grafikaBool == false){
      this.grafika = 'Zintegrowana';
      this.grafikaBool = true;
      this.cena = this.cena - 2000
    }
  }
}
