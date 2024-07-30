import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivennewproductsComponent } from './modeldrivennewproducts.component';

describe('ModeldrivennewproductsComponent', () => {
  let component: ModeldrivennewproductsComponent;
  let fixture: ComponentFixture<ModeldrivennewproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeldrivennewproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeldrivennewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
