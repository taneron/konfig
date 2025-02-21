/*
 * splitit-web-api-v3
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Splitit.Net.Client.OpenAPIDateConverter;

namespace Splitit.Net.Model
{
    /// <summary>
    /// Defines PlanStatus
    /// </summary>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum PlanStatus
    {
        /// <summary>
        /// Enum Initialized for value: Initialized
        /// </summary>
        [EnumMember(Value = "Initialized")]
        Initialized = 1,

        /// <summary>
        /// Enum PendingCapture for value: PendingCapture
        /// </summary>
        [EnumMember(Value = "PendingCapture")]
        PendingCapture = 2,

        /// <summary>
        /// Enum Active for value: Active
        /// </summary>
        [EnumMember(Value = "Active")]
        Active = 3,

        /// <summary>
        /// Enum Cleared for value: Cleared
        /// </summary>
        [EnumMember(Value = "Cleared")]
        Cleared = 4,

        /// <summary>
        /// Enum Canceled for value: Canceled
        /// </summary>
        [EnumMember(Value = "Canceled")]
        Canceled = 5

    }

}
