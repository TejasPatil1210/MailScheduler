import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountFormComponent } from './edit-account-form.component';

describe('EditAccountFormComponent', () => {
  let component: EditAccountFormComponent;
  let fixture: ComponentFixture<EditAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
