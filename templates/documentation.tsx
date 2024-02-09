import type { FC } from 'hono/jsx'

export const Documentation: FC = () => {
    return (
        <a href="https://htmx.org/reference/#request_headers" class="flex items-center mt-5 hover:underline hover:underline-offset-4 hover:text-blue-600 text-lg font-medium" target='_blank'>
            HTMX Reference | Request Headers
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open ml-1.5 mt-0.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
        </a>
    )
}

type ReferenceProps = {
    href: string;
}

export const Reference: FC<ReferenceProps> = (props) => {
    return (
        <a {...props} target="_blank" class="flex items-center hover:underline hover:underline-offset-4 hover:text-blue-600 font-medium">
            {props.children}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open ml-1.5 mt-0.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
        </a>
    )
}
