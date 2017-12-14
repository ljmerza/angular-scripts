import DS from 'ember-data';

export default DS.Model.extend({
	log: DS.attr('string'),
	referral: DS.belongsTo('order/referral')
});
