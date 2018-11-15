import Ember from 'ember';
const {$} = Ember;

export default Ember.Component.extend({
    max_offset: 18,
    min_height: 400,
    min_width: 400,

    didInsertElement(){
        this._super(...arguments);
        const container = this.$('.model-container');
        this.set('_container', container);
      
        this.$('.resize-icon').on('mousedown', (e) => {
            $(window).on('mousemove', this.startResizing.bind(this));
            $(window).on('mouseup', this.stopResizing.bind(this));
        });
    },
  
    willDestroyElement(){
        this._super(...arguments);
        this.stopResizing();
    },
  
  	startResizing(event) {
        const container = this.get('_container')
        const max_offset = this.get('max_offset');
        const min_height = this.get('min_height');
        const min_width = this.get('min_width');

        const {left, top} = container.offset();
        const newX = event.clientX + left;
        const newY = event.clientY + top;

        const window_size = {
            height: $(window).height() - max_offset,
            width: $(window).width() - max_offset,
        };

        const newWidth = newX < min_width ? min_width : newX > window_size.width ? window_size.width : newX;
        container.width(newWidth);

        const newHeight = newY < min_width ? min_height : newY > window_size.height ? window_size.height : newY;
        container.height(newHeight);
    },
      
    stopResizing() {
        $(window).off('mousemove');
        $(window).off('mouseup');
    }
});
