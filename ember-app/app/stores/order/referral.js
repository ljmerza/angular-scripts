import DS from 'ember-data';

export default DS.Store.extend({
    findRecord (modelName, id, options) {
    	console.log(modelName, id, options);
    	return this._super(modelName, id, options);
    }
});