import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderNoUserComponent } from './placeholder-no-user.component';

describe('PlaceholderNoUserComponent', () => {
  let component: PlaceholderNoUserComponent;
  let fixture: ComponentFixture<PlaceholderNoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderNoUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderNoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
