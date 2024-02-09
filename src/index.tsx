import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from '../templates/layout'
import { serveStatic } from '@hono/node-server/serve-static'
import { deleteMessage, getMessage, patchMessage, postMessage, putMessage } from './message'
import { Link } from '../templates/link'
import { Card } from '../templates/card'
import { Grid } from '../templates/grid'
import { Documentation } from '../templates/documentation'
import { Title } from '../templates/title'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Documentation />
      <Grid>
        <Card>
          <Title>GET Method</Title>
          <Link method='get' href='/message'>GET /message</Link>
        </Card>
        <Card>
          <Title>POST Method</Title>
          <Link method='post' href='/message'>POST /message</Link>
        </Card>
        <Card>
          <Title>PATCH Method</Title>
          <Link method='patch' href='/message'>PATCH /message</Link>
        </Card>
        <Card>
          <Title>PUT Method</Title>
          <Link method='put' href='/message'>PUT /message</Link>
        </Card>
        <Card>
          <Title>DELETE Method</Title>
          <Link method='delete' href='/message'>DELETE /message</Link>
        </Card>
      </Grid>
    </Layout>
  )
})

app.get('/message', getMessage)

app.post('/message', postMessage)

app.patch('/message', patchMessage)

app.put('/message', putMessage)

app.delete('/message', deleteMessage)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
