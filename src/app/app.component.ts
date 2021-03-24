import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastrar Profissionais', url: '/cadastro-profissionais', icon: 'mail' },
    { title: 'Bairro', url: '/bairro', icon: 'paper-plane' },
    { title: 'Home', url: '/home', icon: 'heart' },
    { title: 'Sair', url: '/login', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}
