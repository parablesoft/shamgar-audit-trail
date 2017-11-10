import Ember from 'ember';
import layout from '../templates/components/audit-trail-link';

export default Ember.Component.extend({
  layout,
  tagName: "",
  "link-text": "View Audit Trail",
  actions:{
    "toggle-audit-trail"(){
      this.toggleProperty("is-showing-audit-trail");
    }
  }
});
