import DS from 'ember-data';
const { RESTSerializer } = DS;

export default RESTSerializer.extend({
	modelNameFromPayloadKey(){
		return 'post';
	},

	normalizeResponse (store, primaryModelClass, payload, id, requestType){
		return this._super(store, primaryModelClass, {data:payload}, id, requestType);
	}
});
