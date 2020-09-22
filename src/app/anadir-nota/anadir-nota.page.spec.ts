import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnadirNotaPage } from './anadir-nota.page';

describe('AnadirNotaPage', () => {
  let component: AnadirNotaPage;
  let fixture: ComponentFixture<AnadirNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
