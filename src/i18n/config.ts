import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en.json'
import uaTranslation from './ua.json'

i18next.use(initReactI18next).init({
    lng: 'ua',
    fallbackLng: 'en',
    debug: false,
    resources: {
        en: {
            translation: enTranslation,
        },
        ua: {
            translation: uaTranslation,
        },
    },
})

export default i18next
