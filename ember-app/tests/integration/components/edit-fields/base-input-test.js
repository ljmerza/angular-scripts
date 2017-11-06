import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-fields/base-input', 'Integration | Component | edit fields/base input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-fields/base-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-fields/base-input}}
      template block text
    {{/edit-fields/base-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
