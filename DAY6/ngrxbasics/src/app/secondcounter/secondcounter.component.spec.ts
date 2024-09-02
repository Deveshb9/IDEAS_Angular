import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcounterComponent } from './secondcounter.component';

describe('SecondcounterComponent', () => {
  let component: SecondcounterComponent;
  let fixture: ComponentFixture<SecondcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
