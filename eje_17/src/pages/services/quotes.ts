import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuoteService{
    //private http:any;
    public data:any;
    private _email:string;


    constructor(private http:Http){
        //this.http=http
    }

    getQuotes(){
        this.http.get("http://localhost:8080/Servidor/sport.json")
        .subscribe(
            res=>{
                console.log("Quote Service");
                this.data=res.json();
                console.log("--->"+this.data);
            },
            error=>{
                console.log(error);
            }
        );
    }

    set email(newVal:string) {
        this._email=newVal;
    }

    get email() : string {
        return this._email;
    }

   
}