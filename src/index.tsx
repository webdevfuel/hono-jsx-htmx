import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Layout } from '../templates/layout'
import { Message } from '../templates/message'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Message>Hello Hono!</Message>
    </Layout>
  )
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
