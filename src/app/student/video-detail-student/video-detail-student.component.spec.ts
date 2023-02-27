import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailStudentComponent } from './video-detail-student.component';

describe('VideoDetailStudentComponent', () => {
  let component: VideoDetailStudentComponent;
  let fixture: ComponentFixture<VideoDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetailStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
