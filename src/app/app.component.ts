import { query } from '@angular/animations';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sankit';
  sank="sankit from interpolation";

// getData(data:NgForm){
//   console.warn(data)
// }

// constructor(){
//   setTimeout(()=>{

//   this.title="sankit: i am fine how are you";
  
//   },4000);
  
// }


onActivate() {
   // window.scroll(0,0);

   window.scroll({ 
           top: 0, 
           left: 0, 
           behavior: 'smooth' 
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
 
}


onEdit(){
    window.scrollTo(0,0);
  }

  abc(){
    return "hello world11111111111";
  }
//  public remoteData: DataManager = new DataManager ({
//     url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',

//     adaptor: new WebApiAdaptor,

//     crossDomain: true
//   });
//   public dataFields: Object = {text: 'Game', value: 'Id'};

//   public dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(11 0).requiresCount();

//  public localData: Object[] = [
//         { Id: 'Game1', Game: 'American Football' },
//         { Id: 'Game2', Game: 'Badminton' },
//         { Id: 'Game3', Game: 'Basketball' },
//         { Id: 'Game4', Game: 'Cricket' },
//         { Id: 'Game5', Game: 'Football' },
//         { Id: 'Game6', Game: 'Golf' },
//         { Id: 'Game7', Game: 'Hockey' },
//         { Id: 'Game8', Game: 'Rugby' },
//         { Id: 'Game9', Game: 'Snooker' },
//         { Id: 'Game10', Game: 'Tennis' }
//   ];




}
