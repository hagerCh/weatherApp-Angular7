import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { template } from '@angular/core/src/render3';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weatherApp';
  weatherDes="";
  temp="";
  tempMax="";
  tempMin="";
  pressure="";
  humidity="";
  public cityName="";

  constructor(private apiService:ApiService){
  }
  
  btnClicked(city){
    AppComponent.prototype.cityName= city;
    this.apiService.getData().subscribe((data:any)=>{ 
      this.weatherDes= data.weather[0].description;
      this.temp= String((parseFloat(data.main.temp)-273.15).toFixed())+" °C" ;
      this.tempMax= "Max. temperature: " +  String((parseFloat(data.main.temp_max)-273.15).toFixed())+ " °C";
      this.tempMin= "Min. tempertaure: " + String((parseFloat(data.main.temp_min)-273.15).toFixed())+ " °C";
      this.pressure= "Pressure: " + data.main.pressure + " hpa";
      this.humidity= "Humidity: " + data.main.humidity + "%";
    })    
  }
} 