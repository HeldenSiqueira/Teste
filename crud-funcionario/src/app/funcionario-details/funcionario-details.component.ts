import { Funcionario } from '../funcionario';
import { Component, OnInit, Input } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioListComponent } from '../funcionario-list/funcionario-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})
export class FuncionarioDetailsComponent implements OnInit {

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
  list(){
    this.router.navigate(['funcionarios']);
  }

}


