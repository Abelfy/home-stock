import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxSubformBComponent } from './sandbox-subform-b.component';

describe('SandboxSubformBComponent', () => {
  let component: SandboxSubformBComponent;
  let fixture: ComponentFixture<SandboxSubformBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxSubformBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandboxSubformBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
