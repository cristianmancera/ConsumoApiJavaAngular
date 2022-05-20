import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { exhaustAll } from 'rxjs';
import { PersonaModel } from 'src/app/model/persona-model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {


  persona: PersonaModel = {
    id: "Persona No Encontrada",
    nombre: "",
    estado: true
  }
  constructor(private personaService: PersonaService) {

  }
  ngOnInit(): void {
    this.personaService.getPersona()
      .subscribe((response: any) => {
        this.persona = response
      })


  }

}
