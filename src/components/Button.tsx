import { ReactNode } from 'react'

const Button = ({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
    return (
        <button
            className="font-comfortaa text-primary border-primary border px-6 py-2 text-center leading-none"
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
