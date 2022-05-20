import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/model/persona-model';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  persona: PersonaModel = {
    id: "Persona No Encontrada",
    nombre: "",
    estado: false
  }
  forma!: FormGroup;
  constructor(private fb: FormBuilder, private personaService: PersonaService) {
    this.crearFormulario();
    this.crearListeners();
  }

  get nombreNoValido() {
    return this.forma.get('id')?.invalid && this.forma.get('id')?.touched;
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.forma = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  crearListeners() {
    this.forma.get('id')?.valueChanges.subscribe();
  }
  buscar() {

    return Object.values(this.forma.controls).forEach(control => {

      this.personaService.buscarPersona(control.value)
        .subscribe((response: any) => {
          this.persona = response
        })

    });
  }

}
