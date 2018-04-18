import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from "../services/quotes";

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public quotes:QuoteService) {
    console.log("Detalle pages");
    this.quotes.getQuotes(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

}
