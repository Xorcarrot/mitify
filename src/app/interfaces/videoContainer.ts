import { VideoPost } from './videoPost';
/**
 * Container der nötig ist um mit dem Backend zu Kommunizieren
 */
export class VideoContainer {
  video_report!: VideoPost;

  constructor(video: VideoPost) {
    this.video_report = video;
  }
}
