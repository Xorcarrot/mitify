import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptDetailManagerComponent } from './skript-detail-manager.component';

describe('SkriptDetailManagerComponent', () => {
  let component: SkriptDetailManagerComponent;
  let fixture: ComponentFixture<SkriptDetailManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkriptDetailManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkriptDetailManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
