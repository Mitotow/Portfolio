import {
    Component,
    inject,
    signal,
    computed,
    ChangeDetectionStrategy,
} from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import { TranslatePipe } from "@ngx-translate/core";

// Two equivalent "copied" states, alternated on every copy. Each maps to its
// own @keyframes name, so a fresh click always changes animation-name and
// therefore restarts the animation - re-applying the same name does not
// replay a CSS animation, even if the previous sequence already finished.
type ToastState = "idle" | "hover" | "copiedA" | "copiedB";

@Component({
    selector: "app-contact-page",
    standalone: true,
    templateUrl: "./contact.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./contact.scss"],
    imports: [TranslatePipe],
})
export class ContactPageComponent {
    private clip = inject(Clipboard);
    private lastCopiedState: "copiedA" | "copiedB" = "copiedB";

    state = signal<ToastState>("idle");
    alertTextKey = signal("contact.copyPrompt");
    isCopied = computed(() => this.state().startsWith("copied"));
    stateClass = computed(() => `copyVerif--${this.state()}`);

    onMouseEnter() {
        if (this.isCopied()) return;
        this.state.set("hover");
        this.alertTextKey.set("contact.copyPrompt");
    }

    onMouseLeave() {
        if (this.isCopied()) return;
        this.state.set("idle");
    }

    onCopy(text: string) {
        this.clip.copy(text);
        this.lastCopiedState =
            this.lastCopiedState === "copiedA" ? "copiedB" : "copiedA";
        this.state.set(this.lastCopiedState);
        this.alertTextKey.set("contact.copied");
    }

    // Once the "copied" pop+hold+collapse animation actually finishes, release
    // the guard so hovering again shows the prompt tooltip. The copy sequence is
    // the only keyframe animation on this element - hover and idle are
    // transitions, which fire transitionend instead - so the copied guard is
    // enough to identify it. Do not match on event.animationName: Angular
    // prefixes @keyframes names with the component's style-encapsulation
    // attribute, so the name seen here is never the one authored in the SCSS.
    onToastDone(event: AnimationEvent) {
        if (event.target === event.currentTarget && this.isCopied()) {
            this.state.set("idle");
        }
    }
}
