import router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from '@/i18n/config'

const App = () => {
    return (
        <I18nextProvider i18n={i18next}>
            <RouterProvider router={router} />
        </I18nextProvider>
    )
}

export default App
