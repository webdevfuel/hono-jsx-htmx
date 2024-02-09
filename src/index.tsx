import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from '../templates/layout'
import { serveStatic } from '@hono/node-server/serve-static'
import { location, pushUrl, redirect, refresh, replaceUrl, reswap, retarget, reselect, trigger, triggerAfterSettle, triggerAfterSwap } from './response'
import { Link } from '../templates/link'
import { Card } from '../templates/card'
import { Title } from '../templates/title'
import { Documentation, Reference } from '../templates/documentation'
import { Grid } from '../templates/grid'
import { Divider } from '../templates/divider'
import { Target } from '../templates/target'
import { Trigger } from '../templates/trigger'
import { Reselect } from '../templates/reselect'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Documentation />
      <Grid>
        <Card>
          <Title>HX-Location</Title>
          <Link method='get' href='/location'>GET /location</Link>
        </Card>
        <Card>
          <Title>HX-Push-Url</Title>
          <Link method='get' href='/push-url'>GET /push-url</Link>
        </Card>
        <Card>
          <Title>HX-Redirect</Title>
          <Link method='get' href='/redirect'>GET /redirect</Link>
        </Card>
        <Card>
          <Title>HX-Refresh</Title>
          <Link method='get' href='/refresh'>GET /refresh</Link>
        </Card>
        <Card>
          <Title>HX-Replace-Url</Title>
          <Link method='get' href='/replace-url'>GET /replace-url</Link>
        </Card>
        <Card>
          <Title>HX-Reswap</Title>
          <Link method='get' href='/reswap'>GET /reswap</Link>
        </Card>
        <Card>
          <Title>HX-Retarget</Title>
          <Link method='get' href='/retarget'>GET /retarget</Link>
          <Divider />
          <Target />
        </Card>
        <Card>
          <Title>HX-Reselect</Title>
          <Link method='get' href='/reselect'>GET /reselect</Link>
          <Divider />
          <Reselect />
        </Card>
        <Card>
          <Title>HX-Trigger</Title>
          <Trigger>
            <Link method='get' href='/trigger'>GET /trigger</Link>
          </Trigger>
          <Divider />
          <Reference href="https://htmx.org/docs/#request-operations">Request Order of Operations</Reference>
        </Card>
        <Card>
          <Title>HX-Trigger-After-Settle</Title>
          <Trigger>
            <Link method='get' href='/trigger-after-settle'>GET /trigger-after-settle</Link>
          </Trigger>
          <Divider />
          <Reference href="https://htmx.org/docs/#request-operations">Request Order of Operations</Reference>
        </Card>
        <Card>
          <Title>HX-Trigger-After-Swap</Title>
          <Trigger>
            <Link method='get' href='/trigger-after-swap'>GET /trigger-after-swap</Link>
          </Trigger>
          <Divider />
          <Reference href="https://htmx.org/docs/#request-operations">Request Order of Operations</Reference>
        </Card>
      </Grid>
    </Layout>
  )
})

app.get('/location', location)

app.get('/push-url', pushUrl)

app.get('/redirect', redirect)

app.get('/refresh', refresh)

app.get('/replace-url', replaceUrl)

app.get('/reswap', reswap)

app.get('/retarget', retarget)

app.get('/reselect', reselect)

app.get('/trigger', trigger)

app.get('/trigger-after-settle', triggerAfterSettle)

app.get('/trigger-after-swap', triggerAfterSwap)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

