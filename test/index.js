import { spy } from 'sinon'
import debounceMiddleware from '../src'
import test from 'ava'

const config = {
  simple: 100,
  nowait: {},
  maxwait: { wait: 100, maxWait: 150 },
}
const nextHandler = debounceMiddleware(config)()

test('returns a function to handle next', t => {
  t.is(typeof nextHandler, 'function')
  t.is(nextHandler.length, 1)
})

test('handle next returns function to handle action', t => {
  const actionHandler = nextHandler(spy())

  t.is(typeof actionHandler, 'function')
  t.is(actionHandler.length, 1)
})

test('calls next when not flux standard action', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { id: 1 }

  actionHandler(action)

  t.truthy(next.called)
  t.truthy(next.calledWith({ id: 1 }))
})

test.cb('calls debounce when config is passed a number', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { type: 'TEST', meta: { debounce: 'simple' } }

  actionHandler(action)

  t.falsy(next.called)

  setTimeout(() => {
    t.truthy(next.called)
    t.truthy(next.calledWith(action))
    t.end()
  }, 105)
})

test.cb('only calls debounced function once', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { type: 'TEST', meta: { debounce: 'simple' } }

  actionHandler(action)
  actionHandler(action)
  actionHandler(action)

  setTimeout(() => {
    t.is(next.callCount, 1)
    t.end()
  }, 105)
})

test.cb('supports an object passed as config to debounce', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { type: 'TEST', meta: { debounce: 'nowait' } }

  actionHandler(action)

  setTimeout(() => {
    t.truthy(next.called)
    t.end()
  }, 100)
})

test.cb('supports other lodash.debounce options', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { type: 'TEST', meta: { debounce: 'maxwait' } }

  actionHandler(action)

  setTimeout(() => {
    actionHandler(action)
  }, 75)

  setTimeout(() => {
    t.falsy(next.called)
  }, 100)

  setTimeout(() => {
    t.truthy(next.called)
    t.end()
  }, 155)
})

test('skips debounce if not passed matching key', t => {
  const next = spy()
  const actionHandler = nextHandler(next)
  const action = { type: 'TEST', meta: { debounce: 'nomatch' } }

  actionHandler(action)
  t.truthy(next.called)
})
