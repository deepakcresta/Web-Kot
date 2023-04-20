import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KotServiceService {
  error(arg0: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl: string = environment.baseUrl;
  contactApiEndPoint: string = '/contact';
 

  constructor(private httpClient: HttpClient) {}


  // Adding the contact of contact form to contact data base
  addContact(contact: any): Observable<any> {
    console.log(contact);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.contactApiEndPoint),
      contact
    );
  }
}
