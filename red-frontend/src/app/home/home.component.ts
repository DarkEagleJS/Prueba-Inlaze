import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Emitters} from '../emitters/emitters';
import { environment } from './../../environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    message = '';
  
    constructor(
      private http: HttpClient
    ) {
    }

    ngOnInit(): void {
      this.http.get(environment.redURL, {}).subscribe(
        (res: any) => {
          console.log(res);
          this.message = `Hi ${res.name}`;
          Emitters.authEmitter.emit(true);
        },
        err => {
          console.log(err);
          this.message = 'You are not logged in';
          Emitters.authEmitter.emit(false);
        }
      );
    }
}




