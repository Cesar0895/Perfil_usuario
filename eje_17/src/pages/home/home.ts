import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from "../user/user";
import { QuoteService } from "../services/quotes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:any={ 
    email:''

  };

  constructor(public navCtrl: NavController, public quotes:QuoteService) {
    console.log("Home pages");
    this.quotes.getQuotes();
    //console.log("email-->"+this.quotes.getQuotes.name); 
    
  
    
  }

  Validar() {
    
    //this.quotes.email2=this.data.email;
    
    if (this.data.email != this.quotes.data.email) {
      console.log("email: "+this.quotes.data.email);
      this.navCtrl.push(UserPage);
    } else{
      alert("email incorrecto");
    }
    
}

}
