# StravaApiV3.SegmentsApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exploreSegments**](SegmentsApi.md#exploreSegments) | **GET** /segments/explore | Explore segments
[**getLeaderboardBySegmentId**](SegmentsApi.md#getLeaderboardBySegmentId) | **GET** /segments/{id}/leaderboard | Get Segment Leaderboard
[**getLoggedInAthleteStarredSegments**](SegmentsApi.md#getLoggedInAthleteStarredSegments) | **GET** /segments/starred | List Starred Segments
[**getSegmentById**](SegmentsApi.md#getSegmentById) | **GET** /segments/{id} | Get Segment
[**starSegment**](SegmentsApi.md#starSegment) | **PUT** /segments/{id}/starred | Star Segment


<a name="exploreSegments"></a>
# **exploreSegments**
> ExplorerResponse exploreSegments(bounds, opts)

Explore segments

Returns the top 10 segments matching a specified query.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentsApi();

var bounds = [3.4]; // [Number] | The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]

var opts = { 
  'activityType': "activityType_example", // String | Desired activity type.
  'minCat': 56, // Number | The minimum climbing category.
  'maxCat': 56 // Number | The maximum climbing category.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exploreSegments(bounds, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bounds** | [**[Number]**](Number.md)| The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude] | 
 **activityType** | **String**| Desired activity type. | [optional] 
 **minCat** | **Number**| The minimum climbing category. | [optional] 
 **maxCat** | **Number**| The maximum climbing category. | [optional] 

### Return type

[**ExplorerResponse**](ExplorerResponse.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeaderboardBySegmentId"></a>
# **getLeaderboardBySegmentId**
> SegmentLeaderboard getLeaderboardBySegmentId(id, opts)

Get Segment Leaderboard

Returns the specified segment leaderboard.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentsApi();

var id = 789; // Number | The identifier of the segment leaderboard.

var opts = { 
  'gender': "gender_example", // String | Filter by gender.
  'ageGroup': "ageGroup_example", // String | Summit Feature. Filter by age group.
  'weightClass': "weightClass_example", // String | Summit Feature. Filter by weight class.
  'following': true, // Boolean | Filter by friends of the authenticated athlete.
  'clubId': 789, // Number | Filter by club.
  'dateRange': "dateRange_example", // String | Filter by date range.
  'contextEntries': 56, // Number | 
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
apiInstance.getLeaderboardBySegmentId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment leaderboard. | 
 **gender** | **String**| Filter by gender. | [optional] 
 **ageGroup** | **String**| Summit Feature. Filter by age group. | [optional] 
 **weightClass** | **String**| Summit Feature. Filter by weight class. | [optional] 
 **following** | **Boolean**| Filter by friends of the authenticated athlete. | [optional] 
 **clubId** | **Number**| Filter by club. | [optional] 
 **dateRange** | **String**| Filter by date range. | [optional] 
 **contextEntries** | **Number**|  | [optional] 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**SegmentLeaderboard**](SegmentLeaderboard.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedInAthleteStarredSegments"></a>
# **getLoggedInAthleteStarredSegments**
> [SummarySegment] getLoggedInAthleteStarredSegments(opts)

List Starred Segments

List of the authenticated athlete&#39;s starred segments. Private segments are filtered out unless requested by a token with read_all scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentsApi();

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
apiInstance.getLoggedInAthleteStarredSegments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[SummarySegment]**](SummarySegment.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentById"></a>
# **getSegmentById**
> DetailedSegment getSegmentById(id)

Get Segment

Returns the specified segment. read_all scope required in order to retrieve athlete-specific segment information, or to retrieve private segments.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentsApi();

var id = 789; // Number | The identifier of the segment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment. | 

### Return type

[**DetailedSegment**](DetailedSegment.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="starSegment"></a>
# **starSegment**
> DetailedSegment starSegment(id, starred)

Star Segment

Stars/Unstars the given segment for the authenticated athlete. Requires profile:write scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.SegmentsApi();

var id = 789; // Number | The identifier of the segment to star.

var starred = false; // Boolean | If true, star the segment; if false, unstar the segment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.starSegment(id, starred, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the segment to star. | 
 **starred** | **Boolean**| If true, star the segment; if false, unstar the segment. | [default to false]

### Return type

[**DetailedSegment**](DetailedSegment.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

