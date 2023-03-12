import { VideoPost } from './videoPost';
export class VideoContainer {
  video_report!: VideoPost;

  constructor(video: VideoPost) {
    this.video_report = video;
  }
}
