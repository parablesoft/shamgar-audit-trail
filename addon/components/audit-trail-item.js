import Ember from 'ember';
import layout from '../templates/components/audit-trail-item';

import computed from 'ember-computed-decorators';

const {isPresent,Component} = Ember;
const META_VALUE = "meta";

export default Component.extend({
  layout,
  tagName: "li",
  @computed("key-suffix") keySuffixDisplay(keySuffix){
    return keySuffix === META_VALUE ? "Additional Info" : keySuffix;
  },
  @computed("audit-trail","section","key-suffix") displayValue(auditTrail,section,keySuffix){
    let fieldName = `${section}_${keySuffix}`;
    return auditTrail[fieldName];
  },
  @computed("key-suffix", "displayValue") isVisible(keySuffix,displayValue){
    return isPresent(displayValue);
    // return (keySuffix != META_VALUE || (keySuffix === META_VALUE && isPresent(displayValue)));
  },
});
