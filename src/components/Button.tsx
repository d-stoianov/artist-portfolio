import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    className?: string
}) => {
    const mergedClassNames = twMerge(
        'font-comfortaa text-primary border-primary border text-[0.875rem] px-6 py-2 text-center leading-none',
        className
    )

    return (
        <button className={mergedClassNames} {...props}>
            {children}
        </button>
    )
}

export default Button
