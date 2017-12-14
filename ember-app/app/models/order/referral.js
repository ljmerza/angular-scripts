import DS from 'ember-data';

export default DS.Model.extend({
	stop: DS.attr('string'),
	go: DS.attr('string'),
	log: DS.belongsTo('order/log', {async: true})
});
