/**
 * ambianic-functions-collection
 * This collection contains a specification for all API endpoints within Ambianic's Cloud API.
 *
 * The version of the OpenAPI document: a7b6cde1-7435-479a-bd1a-20ab61f9ae08
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmbianicFunctionsCollection);
  }
}(this, function(expect, AmbianicFunctionsCollection) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmbianicFunctionsCollection.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('createSubscription', function() {
      it('should call createSubscription successfully', function(done) {
        //uncomment below and update the code to test createSubscription
        //instance.createSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSubscription', function() {
      it('should call deleteSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteSubscription
        //instance.deleteSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionData', function() {
      it('should call getSubscriptionData successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionData
        //instance.getSubscriptionData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendNotification', function() {
      it('should call sendNotification successfully', function(done) {
        //uncomment below and update the code to test sendNotification
        //instance.sendNotification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
