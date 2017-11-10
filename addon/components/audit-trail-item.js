import Ember from 'ember';
import layout from '../templates/components/audit-trail-item';

import computed from 'ember-computed-decorators';

const {Component} = Ember;

export default Component.extend({
  layout,
  tagName: "li",
  @computed("audit-trail","section","key-suffix") displayValue(auditTrail,section,keySuffix){
    let fieldName = `${section}_${keySuffix}`;
    return auditTrail[fieldName];
  }
});
