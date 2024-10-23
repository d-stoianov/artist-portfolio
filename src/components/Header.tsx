import Button from '@/components/Button'
import Link from '@/components/Link'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()

    return (
        <header className="flex items-center justify-between">
            <nav className="flex gap-6">
                <Link to="">{t('allArtworks')}</Link>
                <Link to="">{t('aboutMe')}</Link>
            </nav>
            <Button>{t('contacts')}</Button>
        </header>
    )
}

export default Header
