import type { FC } from 'hono/jsx'

export const Message: FC = (props) => {
    return (
        <p>
            {props.children}
        </p>
    )
}

