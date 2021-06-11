/**
 * ambianic-cloud-api-collection
 * This collection contains a specification for all API endpoints within Ambianic's Cloud API.
 *
 * The version of the OpenAPI document: 1x
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1x
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * Deleted subscription response
     * @alias module:model/InlineResponse2002
     */
    constructor() { 
        
        InlineResponse2002.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2002.prototype['id'] = undefined;

/**
 * @member {String} object
 */
InlineResponse2002.prototype['object'] = undefined;

/**
 * @member {Boolean} deleted
 */
InlineResponse2002.prototype['deleted'] = undefined;






export default InlineResponse2002;
