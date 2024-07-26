import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivennewproductComponent } from './templatedrivennewproduct.component';

describe('TemplatedrivennewproductComponent', () => {
  let component: TemplatedrivennewproductComponent;
  let fixture: ComponentFixture<TemplatedrivennewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatedrivennewproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivennewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
