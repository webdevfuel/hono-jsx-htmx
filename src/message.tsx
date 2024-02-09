import { Handler } from "hono/types"
import { Message } from "../templates/message"

export const getMessage: Handler = (c) => {
  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const postMessage: Handler = (c) => {
  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const patchMessage: Handler = (c) => {
  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const putMessage: Handler = (c) => {
  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const deleteMessage: Handler = (c) => {
  return c.html(
    <Message>Hello HTMX!</Message>
  )
}
