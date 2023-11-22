import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDpComponent } from './add-edit-dp.component';

describe('AddEditDpComponent', () => {
  let component: AddEditDpComponent;
  let fixture: ComponentFixture<AddEditDpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDpComponent]
    });
    fixture = TestBed.createComponent(AddEditDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
