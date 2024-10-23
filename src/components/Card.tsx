import { twMerge } from 'tailwind-merge'

interface CardProps {
    src: string
    cardText: CardText
    className?: string
}

interface CardText {
    title: string
    details: string
    canvasSize: string
}

const Card = ({ src, cardText, className }: CardProps) => {
    const mergedClassNames = twMerge(
        'relative flex h-[345px] w-[280px] items-center justify-center',
        className
    )

    return (
        <div className={mergedClassNames    }>
            <img
                className="absolute left-0 top-0"
                src="images/frame_left.svg"
            />
            <div className="relative">
                <img src={src} />
                <div className="font-comfortaa text-secondary absolute bottom-0 flex h-[2.5rem] w-full items-center justify-center gap-1 bg-black text-[0.75rem] opacity-[66%]">
                    <p>“{cardText.title}”</p>
                    <p className="text-primary">|</p>
                    <p>{cardText.details}</p>
                    <p className="text-primary">|</p>
                    <p>{cardText.canvasSize}</p>
                </div>
            </div>

            <img
                className="absolute bottom-0 right-0"
                src="images/frame_right.svg"
            />
        </div>
    )
}

export default Card
