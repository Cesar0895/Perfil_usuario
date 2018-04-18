import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { UserPage } from "../user/user";
import { QuoteService } from "../services/quotes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:any={ 
    email:"",

  }

  constructor(public navCtrl: NavController, public quotes:QuoteService) {
    console.log("Home pages")
    this.quotes.getQuotes(); 
    this.quotes.email="";
  
    //this.curpSrv.letra="H"==this.curpSrv.curp.substring(10,11);
  }

  Validar() {
    this.quotes.email=this.data.email;
    console.log("email: "+this.quotes.data.email);
    if (this.quotes.data.email == this.data.email) {
      console.log("email2: "+this.data.email);
      this.navCtrl.push(UserPage);
    } else {
      console.log("correo incorrecto")
    }
    
}

}
