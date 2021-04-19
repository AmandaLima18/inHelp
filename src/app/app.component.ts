import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cadastrar Profissionais', url: '/cadastro-profissionais', icon: 'person-add' },
    { title: 'Cadastro Usuário', url: '/cadastro', icon: 'person-add' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Pagamento', url: '/pagamento', icon: 'card' },
    { title: 'FeedBack', url: '/feedback', icon: 'reader' },
    { title: 'Agenda', url: '/agenda', icon: 'calendar' },
    { title: 'Contratos Anteriores', url: '/contratacoes', icon: 'folder' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
    { title: 'Sair', url: '/login', icon: 'enter' },


  ];
  public labels = [];
  constructor() {}
}
