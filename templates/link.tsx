import type { FC } from 'hono/jsx'

type LinkProps = {
    method: "get" | "post" | "patch" | "put" | "delete"
    href: string
}

export const Link: FC<LinkProps> = (props) => {
    return (
        <a {...propsToHTMX(props)} hx-swap="outerHTML" href="#" class="hover:underline hover:underline-offset-2 hover:text-blue-700 flex items-center">
            {props.children}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send ml-1.5 mt-0.5"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
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
