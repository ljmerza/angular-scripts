import { moduleForModel, test } from 'ember-qunit';

moduleForModel('order/referral', 'Unit | Serializer | order/referral', {
  // Specify the other units that are required for this test.
  needs: ['serializer:order/referral']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
