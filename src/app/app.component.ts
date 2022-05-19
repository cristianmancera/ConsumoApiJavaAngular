import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'ApiJava';

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // APIIIII
    this.http.get("http://localhost:4200/", { responseType: 'text' }).subscribe(response => {
      console.log(response);

    }),
      (error: any) => {
        console.log(error);

      }

  }


}
