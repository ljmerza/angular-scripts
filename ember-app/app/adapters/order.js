import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	urlForQueryRecord (query, modelName){
		return 'http://localhost:3001/api/order/'+query.id;
	}
});
