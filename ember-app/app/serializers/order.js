import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		referral: {embedded: 'always'}
	},

	primaryKey: 'order_number',

});
