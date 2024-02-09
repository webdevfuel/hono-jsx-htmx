import type { FC } from 'hono/jsx'

export const Card: FC = (props) => {
    return (
        <div class="flex flex-col items-start border border-gray-200 rounded-lg p-5 shadow-sm space-y-2.5">
            {props.children}
        </div>
    )
}


