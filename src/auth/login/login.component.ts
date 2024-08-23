import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/models/UserLogin';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  model = {} as UserLogin;
  user = {} as User;
  
  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService  
  ){

  }
  ngOnInit(): void {
  }


public login(): void {
  
  this.authService.login(this.model).subscribe(
    () => { 
      this.router.navigateByUrl('/portfolio/tela-inicial');
      this.toastr.success('Deu Certo', 'Retorno'); 
    },
    (error: any) => {
      if (error.status === 400) {
        this.toastr.error('usuário ou senha inválido');
      }
      else {
        this.toastr.error('Erro: '+ error);
        }
    }
  );
}

register(): void{
  debugger;
  this.authService.register(this.user).subscribe(
    () => {
      this.toastr.success('Deu Certo', 'Retorno');
      this.router.navigateByUrl('/portfolio/tela-inicial');
    },
    (error: any) => this.toastr.error(error.error)
  );
}

}
