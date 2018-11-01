import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
import { SearchService } from '../users/search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  providers: [SearchService],
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newUser = new User(0, '', '', 0 , 0 );
  userTrial = 'marvinchomba';
  users = [];
  user: User;
  @Output() addUser = new EventEmitter<User>();

  submitUser() {
    this.addUser.emit(this.newUser);
    // console.log(this.newUser);
  }

  constructor(searchService: SearchService, private http: HttpClient) {
    this.users = searchService.getUsers();
  }

  addNewUser(userTrial) {
    interface ApiResponse {
      id: number;
      name: string;
      email: string;
      followers: number;
      following: number;
    }
    this.http.get<ApiResponse>
      ('https://api.github.com/users/' + userTrial + environment.apiUrl).subscribe(data => {
        this.user = new User(data.id, data.name, data.email, data.followers, data.following);
        this.users.push(this.user);
      }, err => {
        this.user = new User(0, '', '', 0, 0);
        console.log(this.user);
      });
  }

  ngOnInit() {
  }
}
// export class UserComponent implements OnInit {
//   users = [];
//   constructor(searchService: SearchService, private http: HttpClient) {
//     this.users = searchService.getUsers();
//   }
//   user: User;

//   addNewUser(newUser) {
//     interface ApiResponse {
//       id: number;
//       name: string;
//       email: string;
//       followers: number;
//       following: number;
//     }
//     this.http.get<ApiResponse>
//       ('https://api.github.com/users/' + newUser.name + environment.apiUrl).subscribe(data => {
//         this.user = new User(data.id, data.name, data.email, data.followers, data.following);
//         this.users.push(this.user);
//       }, err => {
//         this.user = new User(0, '', '', 0, 0);
//       });
//   }
//   ngOnInit() {
//   }
// }

