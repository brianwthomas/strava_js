/**
 * Strava API v3
 * Strava API
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StravaApiV3.StreamSet();
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

  describe('StreamSet', function() {
    it('should create an instance of StreamSet', function() {
      // uncomment below and update the code to test StreamSet
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be.a(StravaApiV3.StreamSet);
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property latlng (base name: "latlng")', function() {
      // uncomment below and update the code to test the property latlng
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property altitude (base name: "altitude")', function() {
      // uncomment below and update the code to test the property altitude
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property velocitySmooth (base name: "velocity_smooth")', function() {
      // uncomment below and update the code to test the property velocitySmooth
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property heartrate (base name: "heartrate")', function() {
      // uncomment below and update the code to test the property heartrate
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property cadence (base name: "cadence")', function() {
      // uncomment below and update the code to test the property cadence
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property watts (base name: "watts")', function() {
      // uncomment below and update the code to test the property watts
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property temp (base name: "temp")', function() {
      // uncomment below and update the code to test the property temp
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property moving (base name: "moving")', function() {
      // uncomment below and update the code to test the property moving
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

    it('should have the property gradeSmooth (base name: "grade_smooth")', function() {
      // uncomment below and update the code to test the property gradeSmooth
      //var instance = new StravaApiV3.StreamSet();
      //expect(instance).to.be();
    });

  });

}));