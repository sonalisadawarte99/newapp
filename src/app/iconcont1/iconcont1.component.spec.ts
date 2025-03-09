import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iconcont1Component } from './iconcont1.component';

describe('Iconcont1Component', () => {
  let component: Iconcont1Component;
  let fixture: ComponentFixture<Iconcont1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iconcont1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iconcont1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
