import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iconcont2Component } from './iconcont2.component';

describe('Iconcont2Component', () => {
  let component: Iconcont2Component;
  let fixture: ComponentFixture<Iconcont2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iconcont2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iconcont2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
