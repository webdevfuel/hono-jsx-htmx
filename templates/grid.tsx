import type { FC } from 'hono/jsx'

export const Grid: FC = (props) => {
    return (
        <div class="grid gap-5 pt-5">
            {props.children}
        </div>
    )
}
