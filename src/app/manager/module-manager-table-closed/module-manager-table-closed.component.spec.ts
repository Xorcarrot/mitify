import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleManagerTableClosedComponent } from './module-manager-table-closed.component';

describe('ModuleManagerTableClosedComponent', () => {
  let component: ModuleManagerTableClosedComponent;
  let fixture: ComponentFixture<ModuleManagerTableClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleManagerTableClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleManagerTableClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
