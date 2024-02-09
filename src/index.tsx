import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from '../templates/layout'
import { serveStatic } from '@hono/node-server/serve-static'
import { deleteMessage, getMessage, patchMessage, postMessage, putMessage } from './message'
import { Link } from '../templates/link'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Link method='get' href='/message'>GET /message</Link>
      <Link method='post' href='/message'>POST /message</Link>
      <Link method='patch' href='/message'>PATCH /message</Link>
      <Link method='put' href='/message'>PUT /message</Link>
      <Link method='delete' href='/message'>DELETE /message</Link>
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
