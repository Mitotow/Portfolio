import { Component, inject, signal, computed, ChangeDetectionStrategy } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import { TranslatePipe } from "@ngx-translate/core";
import {
    animate,
    AnimationEvent,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from "@angular/animations";

// Two equivalent "copied" states, alternated on every copy, so a fresh
// click always produces a real state change (and therefore replays the
// animation) even if the previous copy sequence already finished.
type ToastState = "idle" | "hover" | "copiedA" | "copiedB";

@Component({
    selector: "app-contact-page",
    standalone: true,
    templateUrl: "./contact.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["./contact.scss"],
    imports: [TranslatePipe],
    animations: [
        trigger("toast", [
            state("idle", style({ transform: "scale(0)" })),
            state("hover", style({ transform: "scale(1)" })),
            state("copiedA", style({ transform: "scale(0)" })),
            state("copiedB", style({ transform: "scale(0)" })),
            transition("* => hover", animate("150ms ease-in-out")),
            transition("* => idle", animate("150ms ease-in-out")),
            // Copying pops the toast in, holds it, then collapses it again -
            // the 1000ms hold replaces a hand-rolled setTimeout with the
            // animation engine's own timing.
            transition("* => copiedA, * => copiedB", [
                style({ transform: "scale(1)" }),
                animate(
                    "1150ms",
                    keyframes([
                        style({ transform: "scale(1)", offset: 0.87 }),
                        style({ transform: "scale(0)", offset: 1 }),
                    ])
                ),
            ]),
        ]),
    ],
})
export class ContactPageComponent {
    private clip = inject(Clipboard);
    private lastCopiedState: "copiedA" | "copiedB" = "copiedB";

    state = signal<ToastState>("idle");
    alertTextKey = signal("contact.copyPrompt");
    isCopied = computed(() => this.state().startsWith("copied"));

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
        this.lastCopiedState = this.lastCopiedState === "copiedA" ? "copiedB" : "copiedA";
        this.state.set(this.lastCopiedState);
        this.alertTextKey.set("contact.copied");
    }

    // Once the "copied" pop+hold+collapse animation actually finishes,
    // release the guard so hovering again shows the prompt tooltip.
    onToastDone(event: AnimationEvent) {
        if (event.toState === "copiedA" || event.toState === "copiedB") {
            this.state.set("idle");
        }
    }
}
