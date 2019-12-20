import test from 'ava';
import { sum } from './index.js';

test('sum', t => {
	t.is(sum(1, 5), 6);
});
