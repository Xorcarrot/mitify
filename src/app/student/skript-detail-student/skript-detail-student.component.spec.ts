import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptDetailStudentComponent } from './skript-detail-student.component';

describe('SkriptDetailStudentComponent', () => {
  let component: SkriptDetailStudentComponent;
  let fixture: ComponentFixture<SkriptDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkriptDetailStudentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkriptDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
