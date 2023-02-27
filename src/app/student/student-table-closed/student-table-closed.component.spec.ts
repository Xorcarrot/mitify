import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableClosedComponent } from './student-table-closed.component';

describe('StudentTableClosedComponent', () => {
  let component: StudentTableClosedComponent;
  let fixture: ComponentFixture<StudentTableClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTableClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
