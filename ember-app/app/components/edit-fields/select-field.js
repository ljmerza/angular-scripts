import Ember from 'ember';
import baseInput from './base-input';

export default baseInput.extend({
	is_multiple: false, // using as a multiple select dropdown?
	placeholder: '' // placeholder for empty select value
});
