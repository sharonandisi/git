import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable()
export class SearchService {
  getUsers() {
    return Users;
  }
}
