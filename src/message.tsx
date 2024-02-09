import { Handler } from "hono/types"
import { Layout } from "../templates/layout"
import { Message } from "../templates/message"

export const getMessage: Handler = (c) => {
  return c.html(
    <Layout>
      <Message>Hello HTMX!</Message>
    </Layout>
  )
}

export const postMessage: Handler = (c) => {
  return c.html(
    <Layout>
      <Message>Hello HTMX!</Message>
    </Layout>
  )
}

export const patchMessage: Handler = (c) => {
  return c.html(
    <Layout>
      <Message>Hello HTMX!</Message>
    </Layout>
  )
}

export const putMessage: Handler = (c) => {
  return c.html(
    <Layout>
      <Message>Hello HTMX!</Message>
    </Layout>
  )
}

export const deleteMessage: Handler = (c) => {
  return c.html(
    <Layout>
      <Message>Hello HTMX!</Message>
    </Layout>
  )
}
