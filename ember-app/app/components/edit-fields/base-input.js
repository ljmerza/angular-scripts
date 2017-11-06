import Ember from 'ember';

export default Ember.Component.extend({
	model: '', // the model itself
	field_name: '', // the field in the model we are saving
	default: null, // default input
	disabled: false, // disable input?

	actions:{
		saveModel(new_value) {
			this.get('model').set(`${this.field_name}`, new_value);
			this.get('model').save();
		}
	}
});