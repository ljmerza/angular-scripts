import OrderSerializer from './../order';

export default OrderSerializer.extend({
	urlForFindRecord (id, modelName, snapshot) {
		const referral_id = snapshot.belongsTo('referral').id;
		return `http://localhost:3001/api/order/${referral_id}/log/${id}`;
	}
});
