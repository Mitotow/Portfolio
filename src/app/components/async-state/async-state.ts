import { Component, ChangeDetectionStrategy, input } from "@angular/core";

@Component({
    selector: "app-async-state",
    standalone: true,
    templateUrl: "./async-state.html",
    styleUrls: ["./async-state.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncStateComponent {
    loading = input.required<boolean>();
    empty = input.required<boolean>();
}
