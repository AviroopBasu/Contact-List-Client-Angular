import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // Methods for retrieving contacts
  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts');
  }

  // Add contact
  addContact(newContact) {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers: header});

  }

  deleteContacts(id){
    return this.http.delete('http://localhost:3000/api/contact/'+id);
  }

}
