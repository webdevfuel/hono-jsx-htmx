import type { FC } from 'hono/jsx'

export const Title: FC = (props) => {
    return (
        <p class="font-bold bg-blue-500 text-white rounded-md px-1 py-0.5 text-sm">
            {props.children}
        </p>
    )
}


