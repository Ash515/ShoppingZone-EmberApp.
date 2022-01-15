import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cloths/t-shirt', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cloths/t-shirt');
    assert.ok(route);
  });
});
