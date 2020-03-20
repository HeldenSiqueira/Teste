import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  submitted = false;

  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit() {
  }
  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
  }

  save() {
    this.funcionarioService.createFuncionario(this.funcionario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funcionario = new Funcionario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/funcionarios']);
  }

}

