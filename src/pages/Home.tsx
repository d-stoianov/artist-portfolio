import Card from '@/components/Card'
import Header from '@/components/Header'
import ShowCase from '@/components/Showcase'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="bg-dark-gray mx-auto h-full min-h-screen w-full max-w-[100%] px-4 py-[2rem] lg:max-w-screen-lg lg:px-[6rem]">
            <Header />
            <main className="grid flex-1 grid-cols-1 gap-[8rem] py-[2.5rem] md:grid-cols-2">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-primary font-vollkorn text-[3rem]">
                            {t('artistName')}
                        </h1>
                        <p className="text-primary font-comfortaa w-[18rem] text-[0.875rem]">
                            {t('artistSubtitle')}
                        </p>
                        <button className="font-comfortaa text-primary border-primary mt-[2.5rem] h-[30px] w-[130px] border text-center leading-none">
                            {t('allArtworks')}
                        </button>
                    </div>
                    <ShowCase title={t('waterColor')} />
                    <div className="mt-[5rem] flex flex-col items-center gap-10">
                        <p className="text-secondary font-comfortaa">
                            {t('firstCardText')}
                        </p>
                        <Card
                            src={'/images/img_1.png'}
                            cardText={{
                                title: 'Русалка',
                                details: 'масло, холст',
                                canvasSize: '60x80',
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center gap-10">
                        <p className="text-secondary font-comfortaa">
                            {t('secondCardText')}
                        </p>
                        <Card
                            src={'/images/img_1.png'}
                            cardText={{
                                title: 'Русалка',
                                details: 'масло, холст',
                                canvasSize: '60x80',
                            }}
                        />
                    </div>
                    <ShowCase title={t('oilPaints')} />
                    <ShowCase title={t('drawing')} />
                </div>
            </main>
        </div>
    )
}

export default Home
