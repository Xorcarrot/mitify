import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleManagerTableComponent } from './module-manager-table.component';

describe('ModuleManagerTableComponent', () => {
  let component: ModuleManagerTableComponent;
  let fixture: ComponentFixture<ModuleManagerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleManagerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleManagerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
