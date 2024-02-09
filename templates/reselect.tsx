import type { FC } from 'hono/jsx'

export const Reselect: FC = () => {
    return (
        <div>
            <p class="font-bold">Response:</p>
            <p>
                <p>{`<p id="first">Hello HTMX!</p>`}</p>
                <p>{`<p id="second">Hello HTMX!</p>`}</p>
                <p>{`<p id="third">Hello HTMX!</p>`}</p>
            </p>
            <p class="font-bold">Select:</p>
            <p>
                {`<p id="first">Hello HTMX!</p>`}
            </p>
        </div>
    )
}



