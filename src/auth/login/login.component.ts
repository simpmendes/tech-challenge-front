import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/models/UserLogin';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  model = {} as UserLogin;
  
  constructor(private router: Router,
              private authService: AuthService,
              private toastr: ToastrService  
  ){

  }
  ngOnInit(): void {
  }

  public login(): void {
   
    this.authService.login(this.model).subscribe(
      (resp: string) => { 
        //localStorage.setItem('loginToken', resp.data.token);
        //this.router.navigateByUrl('/dashboard');
        localStorage.setItem('authToken', resp);
        console.log('deu certo')
        this.toastr.success('Deu Certo', 'Retorno');
      },
      (error) => {
        if (error.status === 401) {
          this.toastr.error('usuário ou senha inválido');
        }
        else {
          this.toastr.error('Erro: '+ error);
        }
      }
    );
  }

}
