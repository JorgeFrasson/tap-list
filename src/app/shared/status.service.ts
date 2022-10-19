import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  public getStatus(){
    return this.http 
            .get(this.statusUrl);
  }
    
}
