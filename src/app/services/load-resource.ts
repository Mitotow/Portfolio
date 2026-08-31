import { WritableSignal } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export function loadResource<T>(
    loading: WritableSignal<boolean>,
    target: WritableSignal<T>,
    source$: Observable<HttpResponse<T>>
) {
    source$.subscribe({
        next: (res) => {
            if (res.status == 200 && res.body !== null) {
                target.set(res.body);
            }
            loading.set(false);
        },
        error: () => loading.set(false),
    });
}
