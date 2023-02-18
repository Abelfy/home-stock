import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermissionsAssignmentComponent } from './role-permissions-assignment.component';

describe('RolePermissionsAssignmentComponent', () => {
  let component: RolePermissionsAssignmentComponent;
  let fixture: ComponentFixture<RolePermissionsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePermissionsAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolePermissionsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
