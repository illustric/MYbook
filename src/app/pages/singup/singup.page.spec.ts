import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingupPage } from './singup.page';

describe('SingupPage', () => {
  let component: SingupPage;
  let fixture: ComponentFixture<SingupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
