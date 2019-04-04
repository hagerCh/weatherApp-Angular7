import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  city= "";
  
  getData(){
    this.city=AppComponent.prototype.cityName;
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=61a5d9387d379f52a4fa9e9965ec794a")
  }
  
}
