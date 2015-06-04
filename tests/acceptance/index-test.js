import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'hack/tests/helpers/start-app';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '');
  });
  click('a:contains(oaks castle)');
  andThen(function() {
    assert.equal(currentURL(), '/location/1');
  });
  click('a:contains(patio)');
  andThen(function() {
    assert.equal(currentURL(), '/location/1/room/1');
    assert.equal(find('.workstation').length, 2, 'list 2 workstations');
  });
  click('a:contains(workstation 1)');
  andThen(function() {
    assert.equal(currentURL(), '/location/1/room/1/workstation/1');
  });
});
