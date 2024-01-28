import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
        <html>
            <head>
                <script src="/static/htmx.min.js"></script>
            </head>
            <body>{props.children}</body>
        </html>
    )
}
