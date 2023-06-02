import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fitxers',
  templateUrl: './fitxers.component.html',
  styleUrls: ['./fitxers.component.css']
})
export class FitxersComponent {

  constructor(private http: HttpClient) {
    // this.Ex1();
    // this.Ex2();
    // this.Ex3();
    // this.Ex4();
  }

  Ex1() {
    this.http.post<any>("http://localhost:3080/api/ex1", {}).subscribe();
  }

  Ex2() {
    this.http.post<any>("http://localhost:3080/api/ex2", {}).subscribe();
  }

  Ex3() {
    this.http.post<any>("http://localhost:3080/api/ex3", {}).subscribe();
  }

  Ex4() {
    this.http.post<any>("http://localhost:3080/api/ex4", {}).subscribe();
  }
}
