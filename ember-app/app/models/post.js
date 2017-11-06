import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
	userId: attr('number'),
	title: attr('string'),
	body: attr('string')
});
