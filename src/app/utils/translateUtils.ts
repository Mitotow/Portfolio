import { TranslateService } from "@ngx-translate/core";
import LocalizedText from "../interfaces/LocalizedText";

export function translateLocalizedText(
    service: TranslateService,
    value: LocalizedText
) {
    const lang = service.currentLang();
    return (lang && value[lang as keyof LocalizedText]) || value.fr;
}
