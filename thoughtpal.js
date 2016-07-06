Workspaces = new Mongo.Collection("workspaces")


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish("workspaces", function () {
    return Workspaces.find({
      ownerId: "001"
    });
  });
}

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Meteor.subscribe("workspaces");

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.body.helpers({
    workspaces: function() {}
  });

}


