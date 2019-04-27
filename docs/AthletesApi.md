# StravaApiV3.AthletesApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLoggedInAthlete**](AthletesApi.md#getLoggedInAthlete) | **GET** /athlete | Get Authenticated Athlete
[**getLoggedInAthleteZones**](AthletesApi.md#getLoggedInAthleteZones) | **GET** /athlete/zones | Get Zones
[**getStats**](AthletesApi.md#getStats) | **GET** /athletes/{id}/stats | Get Athlete Stats
[**updateLoggedInAthlete**](AthletesApi.md#updateLoggedInAthlete) | **PUT** /athlete | Update Athlete


<a name="getLoggedInAthlete"></a>
# **getLoggedInAthlete**
> DetailedAthlete getLoggedInAthlete()

Get Authenticated Athlete

Returns the currently authenticated athlete. Tokens with profile:read_all scope will receive a detailed athlete representation; all others will receive a summary representation.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.AthletesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoggedInAthlete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DetailedAthlete**](DetailedAthlete.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLoggedInAthleteZones"></a>
# **getLoggedInAthleteZones**
> Zones getLoggedInAthleteZones()

Get Zones

Returns the the authenticated athlete&#39;s heart rate and power zones. Requires profile:read_all.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.AthletesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoggedInAthleteZones(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Zones**](Zones.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStats"></a>
# **getStats**
> ActivityStats getStats(id, opts)

Get Athlete Stats

Returns the activity stats of an athlete.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.AthletesApi();

var id = 56; // Number | The identifier of the athlete. Must match the authenticated athlete.

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
apiInstance.getStats(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the athlete. Must match the authenticated athlete. | 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**ActivityStats**](ActivityStats.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLoggedInAthlete"></a>
# **updateLoggedInAthlete**
> DetailedAthlete updateLoggedInAthlete(weight)

Update Athlete

Update the currently authenticated athlete. Requires profile:write scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.AthletesApi();

var weight = 3.4; // Number | The weight of the athlete in kilograms.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLoggedInAthlete(weight, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weight** | **Number**| The weight of the athlete in kilograms. | 

### Return type

[**DetailedAthlete**](DetailedAthlete.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

