import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/ember-form-master-2000/fm-field',
  init: function() {
    if(!this.get('optionValuePath')) {
      this.set('optionValuePath', 'content.value');
    }
    if(!this.get('optionLabelPath')) {
      this.set('optionLabelPath', 'content.label');
    }
    var dataAttributes = Ember.keys(this).filter(function(attr) {
      return /data-/.test(attr);
    });
    this.set('dataAttributes', dataAttributes);
    this.set('wrapperClass', this.fmconfig.wrapperClass);
    this.set('labelClass', this.fmconfig.labelClass);
    this.set('inputClass', this.fmconfig.inputClass);
    this.set('textareaClass', this.fmconfig.textareaClass);
    this._super();
  },
  placeholder: null,
  label: null,
  errorClass: function() {
    if(this.get('errors')) {
      return this.fmconfig.errorClass;
    }
  }.property('errors'),
  isSelect: function() {
    return this.get('type') === 'select';
  }.property('type'),
  isTextarea: function() {
    return this.get('type') === 'textarea';
  }.property('type'),
  isBasicInput: function() {
    return (!this.get('isSelect') && !this.get('isTextarea'));
  }.property('type'),
  classNameBindings: ['wrapperClass', 'errorClass']
});