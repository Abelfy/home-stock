import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInCartModalComponent } from './add-in-cart-modal.component';

describe('AddInCartModalComponent', () => {
  let component: AddInCartModalComponent;
  let fixture: ComponentFixture<AddInCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInCartModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
