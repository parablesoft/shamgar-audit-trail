import Ember from 'ember';
import layout from '../templates/components/audit-trail';
import computed,{ alias } from 'ember-computed-decorators';

const {Component} = Ember;

export default Component.extend({
  layout,
  sections: [],
  fields: ["at","by"],
  @alias("resource.auditTrail") auditTrail,
});
