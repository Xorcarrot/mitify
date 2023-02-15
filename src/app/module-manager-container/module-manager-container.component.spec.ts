import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleManagerContainerComponent } from './module-manager-container.component';

describe('ModuleManagerContainerComponent', () => {
  let component: ModuleManagerContainerComponent;
  let fixture: ComponentFixture<ModuleManagerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleManagerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
