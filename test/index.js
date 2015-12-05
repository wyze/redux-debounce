import test from 'ava';
import debounceMiddleware from '../src';
import { spy } from 'sinon';

const config = {
  simple: 100,
  nowait: {},
  maxwait: { wait: 100, maxWait: 150 },
};
const nextHandler = debounceMiddleware(config)();

test('returns a function to handle next', async t => {
  const { is } = t;

  is(typeof nextHandler, 'function');
  is(nextHandler.length, 1);
});

test('handle next returns function to handle action', async t => {
  const { is } = t;
  const actionHandler = nextHandler(spy());

  is(typeof actionHandler, 'function');
  is(actionHandler.length, 1);
});

test('calls next when not flux standard action', async t => {
  const { ok } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { id: 1 };

  actionHandler(action);

  ok(next.called);
  ok(next.calledWith({ id: 1 }));
});

test.cb('calls debounce when config is passed a number', t => {
  const { end, notOk, ok } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { type: 'TEST', meta: { debounce: 'simple' } };

  actionHandler(action);

  notOk(next.called);

  setTimeout(() => {
    ok(next.called);
    ok(next.calledWith(action));
    end();
  }, 100);
});

test.cb('only calls debounced function once', t => {
  const { end, is } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { type: 'TEST', meta: { debounce: 'simple' } };

  actionHandler(action);
  actionHandler(action);
  actionHandler(action);

  setTimeout(() => {
    is(next.callCount, 1);
    end();
  }, 100);
});

test.cb('supports an object passed as config to debounce', t => {
  const { end, ok } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { type: 'TEST', meta: { debounce: 'nowait' } };

  actionHandler(action);

  setTimeout(() => {
    ok(next.called);
    end();
  }, 100);
});

test.cb('supports other lodash.debounce options', t => {
  const { end, notOk, ok } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { type: 'TEST', meta: { debounce: 'maxwait' } };

  actionHandler(action);

  setTimeout(() => {
    actionHandler(action);
  }, 75);

  setTimeout(() => {
    notOk(next.called);
  }, 100);

  setTimeout(() => {
    ok(next.called);
    end();
  }, 150);
});

test('skips debounce if not passed matching key', async t => {
  const { ok } = t;
  const next = spy();
  const actionHandler = nextHandler(next);
  const action = { type: 'TEST', meta: { debounce: 'nomatch' } };

  actionHandler(action);
  ok(next.called);
});
