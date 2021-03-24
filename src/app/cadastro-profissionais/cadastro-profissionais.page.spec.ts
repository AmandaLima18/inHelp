import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroProfissionaisPage } from './cadastro-profissionais.page';

describe('CadastroProfissionaisPage', () => {
  let component: CadastroProfissionaisPage;
  let fixture: ComponentFixture<CadastroProfissionaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProfissionaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroProfissionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

$('.cpf').mask('000.000.000-00', {reverse: true});
unction MascaraCPF(cpf){
  if(mascaraInteiro(cpf)==false){
          event.returnValue = false;
  }       
  return formataCampo(cpf, '000.000.000-00', event);
}