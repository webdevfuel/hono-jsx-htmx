import { Handler } from "hono/types"
import { Message } from "../templates/message"

export const location: Handler = (c) => {
  c.header('HX-Location', '/message')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const pushUrl: Handler = (c) => {
  c.header('HX-Push-Url', '/message')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const redirect: Handler = (c) => {
  c.header('HX-Redirect', '/message')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const refresh: Handler = (c) => {
  c.header('HX-Refresh', 'true')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const replaceUrl: Handler = (c) => {
  c.header('HX-Replace-Url', '/message')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const reswap: Handler = (c) => {
  c.header('HX-Reswap', 'innerHTML')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const retarget: Handler = (c) => {
  c.header('HX-Retarget', '#target')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const reselect: Handler = (c) => {
  c.header('HX-Reselect', '#first')

  return c.html(
    <>
      <Message id="first">Hello HTMX!</Message>
      <Message id="second">Hello HTMX!</Message>
      <Message id="third">Hello HTMX!</Message>
    </>
  )
}

export const trigger: Handler = (c) => {
  c.header('HX-Trigger', 'trigger')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const triggerAfterSettle: Handler = (c) => {
  c.header('HX-Trigger-After-Settle', 'trigger')
  c.header('HX-Reswap', 'afterend')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

export const triggerAfterSwap: Handler = (c) => {
  c.header('HX-Trigger-After-Swap', 'trigger')
  c.header('HX-Reswap', 'afterend')

  return c.html(
    <Message>Hello HTMX!</Message>
  )
}

