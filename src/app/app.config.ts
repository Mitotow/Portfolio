import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient, withXhr } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withXhr()),
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            })
        ),
    ],
};
