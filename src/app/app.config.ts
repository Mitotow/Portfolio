import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient, withXhr } from "@angular/common/http";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { constants } from "src/constants";

const savedLang =
    localStorage.getItem(constants.LANG_STORAGE_KEY) ?? constants.DEFAULT_LANG;

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withXhr()),
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideTranslateService({
            loader: provideTranslateHttpLoader({
                prefix: "/assets/i18n/",
                suffix: ".json",
            }),
            lang: savedLang,
            fallbackLang: constants.DEFAULT_LANG,
        }),
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            })
        ),
    ],
};
