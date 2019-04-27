# StravaApiV3.StreamsApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivityStreams**](StreamsApi.md#getActivityStreams) | **GET** /activities/{id}/streams | Get Activity Streams
[**getRouteStreams**](StreamsApi.md#getRouteStreams) | **GET** /routes/{id}/streams | Get Route Streams
[**getSegmentEffortStreams**](StreamsApi.md#getSegmentEffortStreams) | **GET** /segment_efforts/{id}/streams | Get Segment Effort Streams
[**getSegmentStreams**](StreamsApi.md#getSegmentStreams) | **GET** /segments/{id}/streams | Get Segment Streams


<a name="getActivityStreams"></a>
# **getActivityStreams**
> StreamSet getActivityStreams(id, keys, keyByType)

Get Activity Streams

Returns the given activity&#39;s streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.StreamsApi();

var id = 789; // Number | The identifier of the activity.

var keys = ["keys_example"]; // [String] | Desired stream types.

var keyByType = true; // Boolean | Must be true.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivityStreams(id, keys, keyByType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 
 **keys** | [**[String]**](String.md)| Desired stream types. | 
 **keyByType** | **Boolean**| Must be true. | [default to true]

### Return type

[**StreamSet**](StreamSet.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRouteStreams"></a>
# **getRouteStreams**
> StreamSet getRouteStreams(id)

Get Route Streams

Returns the given route&#39;s streams. Requires read_all scope for private routes.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.StreamsApi();

var id = 789; // Number | The identifier of the route.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteStreams(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the route. | 

### Return type

[**StreamSet**](StreamSet.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentEffortStreams"></a>
# **getSegmentEffortStreams**
> StreamSet getSegmentEffortStreams(id, keys, keyByType)

Get Segment Effort Streams

Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.StreamsApi();

var id = 789; // Number | The identifier of the segment effort.

var keys = ["keys_example"]; // [String] | The types of streams to return.

var keyByType = true; // Boolean | Must be true.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentEffortStreams(id, keys, keyByType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment effort. | 
 **keys** | [**[String]**](String.md)| The types of streams to return. | 
 **keyByType** | **Boolean**| Must be true. | [default to true]

### Return type

[**StreamSet**](StreamSet.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentStreams"></a>
# **getSegmentStreams**
> StreamSet getSegmentStreams(id, keys, keyByType)

Get Segment Streams

Returns the given segment&#39;s streams. Requires read_all scope for private segments.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.StreamsApi();

var id = 789; // Number | The identifier of the segment.

var keys = ["keys_example"]; // [String] | The types of streams to return.

var keyByType = true; // Boolean | Must be true.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentStreams(id, keys, keyByType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment. | 
 **keys** | [**[String]**](String.md)| The types of streams to return. | 
 **keyByType** | **Boolean**| Must be true. | [default to true]

### Return type

[**StreamSet**](StreamSet.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

