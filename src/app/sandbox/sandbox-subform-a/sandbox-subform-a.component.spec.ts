import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxSubformAComponent } from './sandbox-subform-a.component';

describe('SandboxSubformAComponent', () => {
  let component: SandboxSubformAComponent;
  let fixture: ComponentFixture<SandboxSubformAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxSubformAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandboxSubformAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
