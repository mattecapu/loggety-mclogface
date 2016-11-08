import createLogFunction from './';

const log = createLogFunction({ tag: 'test_log', uppercase: false });
log(`This should be blue`);

const err = createLogFunction({ tag: 'test_err', color: 'red', uppercase: false });
err(`This should be red`);

const info = createLogFunction({ color: 'yellow' });
info(`This should have no tag prepended`);

const test = createLogFunction({ type: 'warn', tag: 'lower', color: 'green' });
test(`This should be prefixed by [LOWER]`);

info(`Also non-string args like`, 5, `or`, {a:4}, `shouldn't be colored`);
