import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
        <html>
            <head>
                <script src="/static/htmx.min.js"></script>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
                <main class="max-w-screen-md mx-auto">
                    {props.children}
                </main>
            </body>
        </html>
    )
}
