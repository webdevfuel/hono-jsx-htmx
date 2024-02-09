import type { FC } from 'hono/jsx'

type MessageProps = {
    id?: string
}

export const Message: FC<MessageProps> = (props) => {
    return (
        <p {...props}>
            {props.children}
        </p>
    )
}

