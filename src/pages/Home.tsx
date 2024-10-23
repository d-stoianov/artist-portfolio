import Button from '@/components/Button'
import Card from '@/components/Card'
import Header from '@/components/Header'
import ShowCase from '@/components/Showcase'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="bg-dark-gray yellow-radial-gradient mx-auto h-full min-h-screen w-full max-w-[100%] px-4 py-[2.25rem] md:max-w-[864px] md:px-[5rem]">
            <Header />
            <main className="grid grid-cols-1 pt-[2.5rem] md:grid-cols-2">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-primary font-vollkorn text-[3rem]">
                            {t('artistName')}
                        </h1>
                        <p className="text-primary font-comfortaa w-[16rem] text-[0.875rem]">
                            {t('artistSubtitle')}
                        </p>
                        <Button className="my-[2.5rem]">
                            {t('allArtworks')}
                        </Button>
                    </div>
                    <ShowCase title={t('waterColor')} />
                    <div className="mt-[5rem] flex flex-col items-center gap-[2.75rem] md:items-start">
                        <p className="text-secondary font-comfortaa w-[20rem] text-[0.75rem]">
                            {t('firstCardText')}
                        </p>
                        <Card
                            src={'/images/img_1.png'}
                            cardText={{
                                title: t('mermaid'),
                                details: t('oilPaintsAndCanvas'),
                                canvasSize: '60x80',
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-[1rem] md:items-start">
                        <p className="text-secondary font-comfortaa w-[16rem] text-[0.75rem]">
                            {t('secondCardText')}
                        </p>
                        <Card
                            src={'/images/img_1.png'}
                            cardText={{
                                title: t('mermaid'),
                                details: t('oilPaintsAndCanvas'),
                                canvasSize: '60x80',
                            }}
                        />
                    </div>
                    <div className="mt-[6rem] flex flex-col gap-[4rem]">
                        <ShowCase title={t('oilPaints')} />
                        <ShowCase title={t('drawing')} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
