import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-challenge-front';
  showNavbar = true;
  constructor(private router: Router) { }

  ngOnInit() {
    // Verifica a rota atual
    this.showNavbar = !this.router.url.includes('login');
    
    // Monitora mudanças na rota
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('login');
    });
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
