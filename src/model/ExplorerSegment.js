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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LatLng'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LatLng'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ExplorerSegment = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.LatLng);
  }
}(this, function(ApiClient, LatLng) {
  'use strict';




  /**
   * The ExplorerSegment model module.
   * @module model/ExplorerSegment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ExplorerSegment</code>.
   * @alias module:model/ExplorerSegment
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ExplorerSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExplorerSegment} obj Optional instance to populate.
   * @return {module:model/ExplorerSegment} The populated <code>ExplorerSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('climb_category')) {
        obj['climb_category'] = ApiClient.convertToType(data['climb_category'], 'Number');
      }
      if (data.hasOwnProperty('climb_category_desc')) {
        obj['climb_category_desc'] = ApiClient.convertToType(data['climb_category_desc'], 'String');
      }
      if (data.hasOwnProperty('avg_grade')) {
        obj['avg_grade'] = ApiClient.convertToType(data['avg_grade'], 'Number');
      }
      if (data.hasOwnProperty('start_latlng')) {
        obj['start_latlng'] = LatLng.constructFromObject(data['start_latlng']);
      }
      if (data.hasOwnProperty('end_latlng')) {
        obj['end_latlng'] = LatLng.constructFromObject(data['end_latlng']);
      }
      if (data.hasOwnProperty('elev_difference')) {
        obj['elev_difference'] = ApiClient.convertToType(data['elev_difference'], 'Number');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('points')) {
        obj['points'] = ApiClient.convertToType(data['points'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier of this segment
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of this segment
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The category of the climb
   * @member {Number} climb_category
   */
  exports.prototype['climb_category'] = undefined;
  /**
   * The description for the category of the climb
   * @member {module:model/ExplorerSegment.ClimbCategoryDescEnum} climb_category_desc
   */
  exports.prototype['climb_category_desc'] = undefined;
  /**
   * The segment's average grade, in percents
   * @member {Number} avg_grade
   */
  exports.prototype['avg_grade'] = undefined;
  /**
   * @member {module:model/LatLng} start_latlng
   */
  exports.prototype['start_latlng'] = undefined;
  /**
   * @member {module:model/LatLng} end_latlng
   */
  exports.prototype['end_latlng'] = undefined;
  /**
   * The segments's evelation difference, in meters
   * @member {Number} elev_difference
   */
  exports.prototype['elev_difference'] = undefined;
  /**
   * The segment's distance, in meters
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * The polyline of the segment
   * @member {String} points
   */
  exports.prototype['points'] = undefined;


  /**
   * Allowed values for the <code>climb_category_desc</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClimbCategoryDescEnum = {
    /**
     * value: "NC"
     * @const
     */
    "NC": "NC",
    /**
     * value: "4"
     * @const
     */
    "4": "4",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "HC"
     * @const
     */
    "HC": "HC"  };


  return exports;
}));

