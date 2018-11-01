import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SearchService } from '../users/search.service' ;
import { HttpClient } from '@angular/common/http' ;
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [ SearchService ],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  users = [];
  constructor(searchService: SearchService, private http: HttpClient) {
    this.users = searchService.getUsers();
  }
  user: User;

  // addNewUser(newUser) {
  //   interface ApiResponse {
  //     id: number;
  //     name: string;
  //     email: string;
  //     followers: number;
  //     following: number;
  //   }
  //   this.http.get<ApiResponse>
  //     ('https://api.github.com/users/' + newUser.name + environment.apiUrl).subscribe(data => {
  //       this.user = new User(data.id, data.name, data.email, data.followers, data.following);
  //       this.users.push(this.user);
  //     }, err => {
  //       this.user = new User(0, '', '', 0, 0);
  //     });
  // }
  ngOnInit() {
  }
   }


