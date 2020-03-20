import { Component, OnInit } from '@angular/core';
import { Funcionario } from "../funcionario";
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  id: number;
  funcionario: Funcionario;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionario = new Funcionario();

    this.id = this.route.snapshot.params['id'];
    
    this.funcionarioService.getFuncionario(this.id)
      .subscribe(data => {
        console.log(data)
        this.funcionario = data;
      }, error => console.log(error));
  }
  updateFuncionario() {
    this.funcionarioService.updateFuncionario(this.id, this.funcionario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funcionario = new Funcionario();
    this.gotoList();
  }

  onSubmit() {
    this.updateFuncionario();    
  }

  gotoList() {
    this.router.navigate(['/funcionarios']);
  }

}
