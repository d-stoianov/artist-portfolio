import { ReactNode } from 'react'
import {
    LinkProps as ReactLinkProps,
    Link as ReactLink,
} from 'react-router-dom'

const Link = ({
    children,
    ...props
}: ReactLinkProps & { children: ReactNode }) => {
    return (
        <ReactLink
            className="font-comfortaa text-secondary underline"
            {...props}
        >
            {children}
        </ReactLink>
    )
}

export default Link
