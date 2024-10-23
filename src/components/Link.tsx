import { ReactNode } from 'react'
import {
    LinkProps as ReactLinkProps,
    Link as ReactLink,
} from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const Link = ({
    children,
    className,
    ...props
}: ReactLinkProps & { children: ReactNode; className?: string }) => {
    const mergedClassNames = twMerge(
        'font-comfortaa text-secondary underline',
        className
    )

    return (
        <ReactLink className={mergedClassNames} {...props}>
            {children}
        </ReactLink>
    )
}

export default Link
