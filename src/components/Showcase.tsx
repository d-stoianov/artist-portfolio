import Link from '@/components/Link'
import { useTranslation } from 'react-i18next'

const ShowCase = ({
    title,
    className,
}: {
    title: string
    className?: string
}) => {
    const { t } = useTranslation()

    return (
        <div className={className}>
            <div className="flex w-full items-center gap-[8rem]">
                <h2 className="text-primary font-vollkorn text-[1.5rem]">
                    {title}
                </h2>
                <Link
                    className="no-underline"
                    to=""
                >
                    {t('more')} →
                </Link>
            </div>
            <div className="mt-[1.5rem] flex gap-4">
                <img src="images/img_2.png" />
                <img className="fade-right" src="images/img_2.png" />
            </div>
        </div>
    )
}

export default ShowCase
