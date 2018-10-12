import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPresenteComponent } from './formulario-presente.component';

describe('FormularioPresenteComponent', () => {
  let component: FormularioPresenteComponent;
  let fixture: ComponentFixture<FormularioPresenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPresenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
