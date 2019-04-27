# StravaApiV3.SegmentEffortsApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEffortsBySegmentId**](SegmentEffortsApi.md#getEffortsBySegmentId) | **GET** /segments/{id}/all_efforts | List Segment Efforts
[**getSegmentEffortById**](SegmentEffortsApi.md#getSegmentEffortById) | **GET** /segment_efforts/{id} | Get Segment Effort


<a name="getEffortsBySegmentId"></a>
# **getEffortsBySegmentId**
> [DetailedSegmentEffort] getEffortsBySegmentId(id, opts)

List Segment Efforts

Returns a set of the authenticated athlete&#39;s segment efforts for a given segment.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentEffortsApi();

var id = 56; // Number | The identifier of the segment.

var opts = { 
  'page': 56, // Number | Page number.
  'perPage': 30 // Number | Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEffortsBySegmentId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment. | 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[DetailedSegmentEffort]**](DetailedSegmentEffort.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentEffortById"></a>
# **getSegmentEffortById**
> DetailedSegmentEffort getSegmentEffortById(id)

Get Segment Effort

Returns a segment effort from an activity that is owned by the authenticated athlete.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentEffortsApi();

var id = 789; // Number | The identifier of the segment effort.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentEffortById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment effort. | 

### Return type

[**DetailedSegmentEffort**](DetailedSegmentEffort.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

