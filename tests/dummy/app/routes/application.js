import Ember from 'ember';

const {Route,RSVP} = Ember;

export default Route.extend({
  model(){
    let sections = ["ordered","in_process"];
    let resource = Ember.Object.create({
      status: "foo",
      auditTrail: {
	"ordered_at": "2017-11-10T14:56:38.146Z",
	"ordered_by": "Bruce Bubbly",
	"in_process_at": "2017-11-10T14:57:35.379Z",
	"in_process_by": "Vic Amuso",
	"ordered_by_id": 4,
	"in_process_by_id": 1,
	"ordered_by_email": "adam+dealer@parablesoft.com",
	"in_process_by_email": "vic@parablesoft.com"
      }
    });

    return RSVP.hash({
      resource: resource,
      sections: sections,
    });
  },
});
