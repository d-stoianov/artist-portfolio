import { useTranslation } from 'react-i18next'

const ShowCase = ({ title }: { title: string }) => {
    const { t } = useTranslation()
    return (
        <div className="mt-[5rem]">
            <div className="flex w-full items-center gap-[8rem]">
                <h2 className="text-primary font-vollkorn text-[1.5rem]">
                    {title}
                </h2>
                <a
                    className="text-secondary font-comfortaa text-[1rem]"
                    href=""
                >
                    {t('more')} →
                </a>
            </div>
            <div className="mt-[1.5rem] flex gap-4">
                <img src="images/img_2.png" />
                <img className="fade-right" src="images/img_2.png" />
            </div>
        </div>
    )
}

export default ShowCase
