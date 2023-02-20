import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailManagerComponent } from './video-detail-manager.component';

describe('VideoDetailManagerComponent', () => {
  let component: VideoDetailManagerComponent;
  let fixture: ComponentFixture<VideoDetailManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetailManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDetailManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
