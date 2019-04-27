# StravaApiV3.ActivitiesApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActivity**](ActivitiesApi.md#createActivity) | **POST** /activities | Create an Activity
[**getActivityById**](ActivitiesApi.md#getActivityById) | **GET** /activities/{id} | Get Activity
[**getCommentsByActivityId**](ActivitiesApi.md#getCommentsByActivityId) | **GET** /activities/{id}/comments | List Activity Comments
[**getKudoersByActivityId**](ActivitiesApi.md#getKudoersByActivityId) | **GET** /activities/{id}/kudos | List Activity Kudoers
[**getLapsByActivityId**](ActivitiesApi.md#getLapsByActivityId) | **GET** /activities/{id}/laps | List Activity Laps
[**getLoggedInAthleteActivities**](ActivitiesApi.md#getLoggedInAthleteActivities) | **GET** /athlete/activities | List Athlete Activities
[**getZonesByActivityId**](ActivitiesApi.md#getZonesByActivityId) | **GET** /activities/{id}/zones | Get Activity Zones
[**updateActivityById**](ActivitiesApi.md#updateActivityById) | **PUT** /activities/{id} | Update Activity


<a name="createActivity"></a>
# **createActivity**
> DetailedActivity createActivity(name, type, startDateLocal, elapsedTime, opts)

Create an Activity

Creates a manual activity for an athlete, requires activity:write scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var name = "name_example"; // String | The name of the activity.

var type = "type_example"; // String | Type of activity. For example - Run, Ride etc.

var startDateLocal = null; // Object | ISO 8601 formatted date time.

var elapsedTime = 56; // Number | In seconds.

var opts = { 
  'description': "description_example", // String | Description of the activity.
  'distance': 3.4, // Number | In meters.
  'trainer': 56, // Number | Set to 1 to mark as a trainer activity.
  'photoIds': null, // Object | List of native photo ids to attach to the activity.
  'commute': 56 // Number | Set to 1 to mark as commute.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createActivity(name, type, startDateLocal, elapsedTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the activity. | 
 **type** | **String**| Type of activity. For example - Run, Ride etc. | 
 **startDateLocal** | [**Object**](.md)| ISO 8601 formatted date time. | 
 **elapsedTime** | **Number**| In seconds. | 
 **description** | **String**| Description of the activity. | [optional] 
 **distance** | **Number**| In meters. | [optional] 
 **trainer** | **Number**| Set to 1 to mark as a trainer activity. | [optional] 
 **photoIds** | [**Object**](.md)| List of native photo ids to attach to the activity. | [optional] 
 **commute** | **Number**| Set to 1 to mark as commute. | [optional] 

### Return type

[**DetailedActivity**](DetailedActivity.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getActivityById"></a>
# **getActivityById**
> DetailedActivity getActivityById(id, opts)

Get Activity

Returns the given activity that is owned by the authenticated athlete. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 789; // Number | The identifier of the activity.

var opts = { 
  'includeAllEfforts': true // Boolean | To include all segments efforts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivityById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 
 **includeAllEfforts** | **Boolean**| To include all segments efforts. | [optional] 

### Return type

[**DetailedActivity**](DetailedActivity.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommentsByActivityId"></a>
# **getCommentsByActivityId**
> [Comment] getCommentsByActivityId(id, opts)

List Activity Comments

Returns the comments on the given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 789; // Number | The identifier of the activity.

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
apiInstance.getCommentsByActivityId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[Comment]**](Comment.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getKudoersByActivityId"></a>
# **getKudoersByActivityId**
> [SummaryAthlete] getKudoersByActivityId(id, opts)

List Activity Kudoers

Returns the athletes who kudoed an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 56; // Number | The identifier of the activity.

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
apiInstance.getKudoersByActivityId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[SummaryAthlete]**](SummaryAthlete.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLapsByActivityId"></a>
# **getLapsByActivityId**
> [Lap] getLapsByActivityId(id)

List Activity Laps

Returns the laps of an activity identified by an identifier. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 789; // Number | The identifier of the activity.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLapsByActivityId(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 

### Return type

[**[Lap]**](Lap.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedInAthleteActivities"></a>
# **getLoggedInAthleteActivities**
> [SummaryActivity] getLoggedInAthleteActivities(opts)

List Athlete Activities

Returns the activities of an athlete for a specific identifier. Requires activity:read. Only Me activities will be filtered out unless requested by a token with activity:read_all.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var opts = { 
  'before': 56, // Number | An epoch timestamp to use for filtering activities that have taken place before a certain time.
  'after': 56, // Number | An epoch timestamp to use for filtering activities that have taken place after a certain time.
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
apiInstance.getLoggedInAthleteActivities(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | **Number**| An epoch timestamp to use for filtering activities that have taken place before a certain time. | [optional] 
 **after** | **Number**| An epoch timestamp to use for filtering activities that have taken place after a certain time. | [optional] 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[SummaryActivity]**](SummaryActivity.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getZonesByActivityId"></a>
# **getZonesByActivityId**
> [ActivityZone] getZonesByActivityId(id)

Get Activity Zones

Summit Feature. Returns the zones of a given activity. Requires activity:read for Everyone and Followers activities. Requires activity:read_all for Only Me activities.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 56; // Number | The identifier of the activity.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZonesByActivityId(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 

### Return type

[**[ActivityZone]**](ActivityZone.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateActivityById"></a>
# **updateActivityById**
> DetailedActivity updateActivityById(id, opts)

Update Activity

Updates the given activity that is owned by the authenticated athlete. Requires activity:write. Also requires activity:read_all in order to update Only Me activities

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.ActivitiesApi();

var id = 789; // Number | The identifier of the activity.

var opts = { 
  'body': new StravaApiV3.UpdatableActivity() // UpdatableActivity | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateActivityById(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the activity. | 
 **body** | [**UpdatableActivity**](UpdatableActivity.md)|  | [optional] 

### Return type

[**DetailedActivity**](DetailedActivity.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

