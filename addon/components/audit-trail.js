import Ember from 'ember';
import layout from '../templates/components/audit-trail';
import computed,{ alias } from 'ember-computed-decorators';

const {Component} = Ember;

export default Component.extend({
  layout,
  "sections-to-show": [],
  fields: ["at","by"],
  @alias("resource.auditTrail") auditTrail,
  @computed("sections-to-show","resource.status") sections(sections,status){
    let maxIndex = sections.indexOf(status);
    return sections.filter((item,index) =>{
      return index <= maxIndex;
    });
  }
});
