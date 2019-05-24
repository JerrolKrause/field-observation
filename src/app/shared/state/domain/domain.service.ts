import { Injectable } from '@angular/core';
import { UsersService } from './users';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  constructor(
    public users: UsersService
  ) {}
}
