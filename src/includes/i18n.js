import { createI18n } from "vue-i18n"
import en from "@/locales/en.json"
import tw from "@/locales/tw.json"

export default createI18n ({
    locale: "en",
    fallbackLocale:"en",
    messages: {
        en,
        tw
    },
    numberFormats: {
        en: {
            currency:{
                style: "currency",
                currency: "USD"
            }
        },
        tw: {
            currency:{
                style: "currency",
                currency: "TWD"
            }
        },
        jp: {
            currency:{
                style: "currency",
                currency: "JPY"
            }
        }
    }
})