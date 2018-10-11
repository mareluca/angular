import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(public http:HttpClient) { }
   getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
	}
	addUser(user) {
		return this.http.post('https://jsonplaceholder.typicode.com/users', user);
	}
	deleteUser(id) {
		return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
	}
	updateUser(user) {
		return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id, user);
	}
}
