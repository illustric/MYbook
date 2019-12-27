import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutusPage } from './aboutus.page';

describe('AboutusPage', () => {
  let component: AboutusPage;
  let fixture: ComponentFixture<AboutusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
