import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraralumnoComponent } from './registraralumno.component';

describe('RegistraralumnoComponent', () => {
  let component: RegistraralumnoComponent;
  let fixture: ComponentFixture<RegistraralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraralumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
