import { SkriptPost } from './skriptPost';
/**
 * Container der nötig ist um mit dem Backend zu Kommunizieren
 */
export class SkriptContainer {
  skript_report!: SkriptPost;

  constructor(skript: SkriptPost) {
    this.skript_report = skript;
  }
}
