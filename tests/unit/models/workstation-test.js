import { moduleForModel, test } from 'ember-qunit';

moduleForModel('workstation', 'Unit | Model | workstation', {
  // Specify the other units that are required for this test.
  needs: ['model:workstation', 'model:location', 'model:room']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
