import { SkriptPost } from './skriptPost';
export class SkriptContainer {

    skript_report!: SkriptPost;

    constructor(skript: SkriptPost) {
        this.skript_report = skript;
    }

}
