import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { App } from "./app/app";
import { GlobalCacheConfig } from "ts-cacheable";
import { constants } from "src/constants";

GlobalCacheConfig.maxAge = constants.CACHE_TTL;
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
