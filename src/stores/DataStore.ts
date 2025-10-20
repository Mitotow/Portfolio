import { HttpClient, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cacheable } from "ts-cacheable";
import { constants } from "src/constants";
import Project from "src/interfaces/Project";
import SkillElement from "src/interfaces/SkillElement";
import Experience from "src/interfaces/Experience";

@Injectable({ providedIn: "root" })
export class DataStore {
    private httpClient = inject(HttpClient);

    @Cacheable()
    getProjects(): Observable<HttpResponse<Project[]>> {
        return this.get<Project[]>(constants.API_PROJECTS_ENDPOINT);
    }

    @Cacheable()
    getSkills(): Observable<HttpResponse<SkillElement[]>> {
        return this.get<SkillElement[]>(constants.API_SKILLS_ENDPOINT);
    }

    @Cacheable()
    getExperiences(): Observable<HttpResponse<Experience>> {
        return this.get<Experience>(constants.API_EXPERIENCES_ENDPOINT);
    }

    private get<T>(endpoint: string): Observable<HttpResponse<T>> {
        return this.httpClient.get<T>(constants.API_URL + endpoint, {
            observe: "response",
        });
    }
}
