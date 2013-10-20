/**
 * Register reactive subscriptions here
 * @returns {{cards: 533}}
 */
MOBY.subscriptions = function(){
    return {
      cards: Meteor.subscribe('cards', Session.get("currentCardID"))
    };
};