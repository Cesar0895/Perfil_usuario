import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from "../services/quotes";
import { DetallesPage } from '../detalles/detalles';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public quotes:QuoteService) {
    console.log("User pages");
    this.quotes.getQuotes(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    
  }

  detalle(){
    this.navCtrl.push(DetallesPage);
  }

}
