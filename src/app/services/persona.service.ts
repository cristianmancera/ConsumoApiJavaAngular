import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = "http://localhost:8080/sena/"
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {


  }

  getPersona() {
    // APIIIII
    return this.http.get(`${this.url}persona`, { responseType: 'json' });
  }
  buscarPersona(id: String) {
    return this.http.get(`${this.url}buscarPersona?id=${id}`, { responseType: 'json' });
  }
}
