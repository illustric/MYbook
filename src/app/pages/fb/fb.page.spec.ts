import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FbPage } from './fb.page';

describe('FbPage', () => {
  let component: FbPage;
  let fixture: ComponentFixture<FbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
