import Ember from 'ember';
import layout from '../templates/components/audit-trail';
import computed,{ alias } from 'ember-computed-decorators';

const {Component} = Ember;

const FIELD_REPLACEMENTS = /(_at|_by_id|_by|_by_email|_meta)$/g;
export default Component.extend({
  layout,
  fields: ["at","by","meta"],
  @alias("resource.auditTrail") auditTrail,
  @computed("auditTrail") sections(auditTrail){
    let sections = this.getUniqueSectionsFromAuditTrail(auditTrail);
    return this.sortSections(sections,auditTrail);
  },
  getUniqueSectionsFromAuditTrail(auditTrail){
    let keys = this.getAuditTrailKeys(auditTrail);
    return this.getSectionsFromAuditTrail(keys).uniq();
  },
  getSectionsFromAuditTrail(keys){
    return keys.map(item =>{
      return this.getEventName(item);
    });
  },
  sortSections(sections,auditTrail){
    return sections.sort((a,b) => {
      return this.compareAuditTrailEvent(a,b,auditTrail);
    });
  },
  compareAuditTrailEvent(a,b,auditTrail){
    return auditTrail[`${a}_at`] > auditTrail[`${b}_at`];
  },
  getAuditTrailKeys(auditTrail){
      return Object.keys(auditTrail);
  },
  getEventName(item){
    return item.replace(FIELD_REPLACEMENTS,'');
  }

});
