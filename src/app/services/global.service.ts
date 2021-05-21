import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  currentValue: string = '';
  username: string = '';
  password: string = 'password';
  constructor() { }
}
