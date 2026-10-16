import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  silnik: string = 'Włączony';
  silnikBool: boolean = true;
  silnikBtn: string = 'Zgaś silnik';

  predkosc: number = 100;
  temperatura: number = 20;
  bateria: number = 100;
  symbol: string = '☀️';
  tryb: string = 'jasny';

  zgasSilnik(){
    if(this.silnikBool == true){
      this.silnik = 'Wyłączony';
      this.silnikBool = false;
      this.silnikBtn = 'Uruchom silnik';
    }else if (this.silnikBool == false && this.bateria > 1){
      this.silnik = 'Włączony';
      this.silnikBool = true;
      this.silnikBtn = 'Zgaś silknik';
    }
  }

  gaz(){
    if(this.predkosc < 200){
      this.predkosc = this.predkosc + 10;
      this.bateria--;
    }
  }

  hamuj(){
    this.predkosc = this.predkosc - 10;
  }

  laduj(){
    if(this.bateria < 100){
      this.bateria = 100;
    }else{

    }
  }

  trybSwitch()
{
    if (this.tryb == "Dzień")
    {
        this.tryb = "Noc";
    }
    else
    {
        this.tryb = "Dzień";
    }
}

  plus(){
    if(this.temperatura < 30){
      this.temperatura++;
      if(this.temperatura >= 20){
        this.symbol = '☀️';
      }else{
        this.symbol = '❄️';
      }
    }
  }

  minus(){
    if(this.temperatura > 14){
      this.temperatura--;
      if(this.temperatura >= 20){
        this.symbol = '☀️';
      }else{
        this.symbol = '❄️';
      }
    }
  }
}
