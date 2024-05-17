import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  constructor(private http:HttpClient){}

  getHealthStatus(){
   return this.http.get('/api/LiveNavHandler/Current.ashx?l=en-GB&t=1715934455333&PreviousNavValue=17734315842326&key=263c30dd-d5ba-41d6-a9b1-c1fb59cf30da')
  }
}
