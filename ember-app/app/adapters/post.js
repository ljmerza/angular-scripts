import DS from 'ember-data';
const { RESTAdapter } = DS;

export default RESTAdapter.extend({
	host: 'https://jsonplaceholder.typicode.com',

	urlForQueryRecord(query, modelName) {
		const url = this.buildURL();
		return `${this.host}/posts/${query}`;
	}
});
