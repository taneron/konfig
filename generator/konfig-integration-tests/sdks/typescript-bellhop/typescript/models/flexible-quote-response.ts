/*
partner-api

Bellhop's Partner API

The version of the OpenAPI document: 5.0.0
Contact: engineering@bellhop.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FlexService } from './flex-service';

/**
 * Response for flexible-package quotes
 * @export
 * @interface FlexibleQuoteResponse
 */
export interface FlexibleQuoteResponse {
    /**
     * 
     * @type {string}
     * @memberof FlexibleQuoteResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FlexibleQuoteResponse
     */
    'start_datetime': string;
    /**
     * 
     * @type {boolean}
     * @memberof FlexibleQuoteResponse
     */
    'is_available': boolean;
    /**
     * 
     * @type {string}
     * @memberof FlexibleQuoteResponse
     */
    'timezone': string;
    /**
     * 
     * @type {Array<FlexService>}
     * @memberof FlexibleQuoteResponse
     */
    'services': Array<FlexService>;
    /**
     * 
     * @type {number}
     * @memberof FlexibleQuoteResponse
     */
    'total_cost': number | null;
}

