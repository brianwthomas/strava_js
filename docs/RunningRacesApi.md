# StravaApiV3.RunningRacesApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRunningRaceById**](RunningRacesApi.md#getRunningRaceById) | **GET** /running_races/{id} | Get Running Race
[**getRunningRaces**](RunningRacesApi.md#getRunningRaces) | **GET** /running_races | List Running Races


<a name="getRunningRaceById"></a>
# **getRunningRaceById**
> RunningRace getRunningRaceById(id)

Get Running Race

Returns a running race for a given identifier.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RunningRacesApi();

var id = 56; // Number | The identifier of the running race.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRunningRaceById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the running race. | 

### Return type

[**RunningRace**](RunningRace.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRunningRaces"></a>
# **getRunningRaces**
> [RunningRace] getRunningRaces(opts)

List Running Races

Returns a list running races based on a set of search criteria.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RunningRacesApi();

var opts = { 
  'year': 56 // Number | Filters the list by a given year.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRunningRaces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Filters the list by a given year. | [optional] 

### Return type

[**[RunningRace]**](RunningRace.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

