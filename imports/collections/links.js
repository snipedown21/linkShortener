import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'links.insert': function(url) {
    check(url, Match.Where(url => validUrl.isUri(url)));

    // Generates a random string of characters(0 - 9) and (a-z), 5 characters long.
    const token = Math.random().toString(36).slice(-5);
    Links.insert({ url, token, clicks: 0 });
  }
});

export const Links = new Mongo.Collection('links');
