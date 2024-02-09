import type { FC } from 'hono/jsx'

export const Trigger: FC = (props) => {
    return (
      <div hx-on:trigger="alert('Triggered!')">
            {props.children}
      </div>
    )
}


