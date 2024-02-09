import type { FC } from 'hono/jsx'

type LinkProps = {
    method: "get" | "post" | "patch" | "put" | "delete"
    href: string
}

export const Link: FC<LinkProps> = (props) => {
    return (
        <a {...propsToHTMX(props)} hx-swap="outerHTML" style="display: block; text-decoration: none; color: black;">
            {props.children}
        </a>
    )
}


const propsToHTMX = (props: LinkProps) => {
    const { method, href, ...rest } = props
    return {
        ...rest,
        [`hx-${method}`]: href,
    }
}
