import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  edition: number = 1;  
  cloudStorage: boolean = false;
  pts: boolean = false;
  integratedAPI: boolean = false;

  netto: number = 0;
  vat: number = 0;
  brutto: number = 0;

  personalData: string = '';
  email: string = '';
  licenseNum: number = 0;
  uwagi: string = '';

  widocznosc1: string = 'hidden'
  widocznosc2: string = 'hidden'
  oblicz(){
    if(this.edition == 1){
      this.netto = this.licenseNum * 99;
    }else if(this.edition == 2){
      this.netto = this.licenseNum * 199;
    }else{
      this.netto = this.licenseNum * 399  ;
    }

    this.obliczCeny();
  }

  service1(){
    if(this.cloudStorage == true){
      this.netto += 100;
    }else{
      this.netto -= 100;
    }

    this.obliczCeny();
  }

  service2(){
    if(this.pts == true){
      this.netto += 120;
    }else{
      this.netto -= 120;
    }

    this.obliczCeny();
  }

  service3(){
    if(this.integratedAPI == true){
      this.netto += 140;
    }else{
      this.netto -= 140;
    }

    this.obliczCeny();
  }

  obliczCeny(){
    this.vat = this.netto * 0.19;
    this.brutto = this.netto + this.vat;
    if(this.licenseNum >= 10){
      this.brutto *= 0.90;
    }
  }
}
