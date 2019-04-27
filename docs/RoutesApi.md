# StravaApiV3.RoutesApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRouteAsGPX**](RoutesApi.md#getRouteAsGPX) | **GET** /routes/{id}/export_gpx | Export Route GPX
[**getRouteAsTCX**](RoutesApi.md#getRouteAsTCX) | **GET** /routes/{id}/export_tcx | Export Route TCX
[**getRouteById**](RoutesApi.md#getRouteById) | **GET** /routes/{id} | Get Route
[**getRoutesByAthleteId**](RoutesApi.md#getRoutesByAthleteId) | **GET** /athletes/{id}/routes | List Athlete Routes


<a name="getRouteAsGPX"></a>
# **getRouteAsGPX**
> getRouteAsGPX(id)

Export Route GPX

Returns a GPX file of the route. Requires read_all scope for private routes.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RoutesApi();

var id = 56; // Number | The identifier of the route.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRouteAsGPX(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the route. | 

### Return type

null (empty response body)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRouteAsTCX"></a>
# **getRouteAsTCX**
> getRouteAsTCX(id)

Export Route TCX

Returns a TCX file of the route. Requires read_all scope for private routes.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RoutesApi();

var id = 56; // Number | The identifier of the route.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRouteAsTCX(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the route. | 

### Return type

null (empty response body)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRouteById"></a>
# **getRouteById**
> Route getRouteById(id)

Get Route

Returns a route using its identifier. Requires read_all scope for private routes.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RoutesApi();

var id = 56; // Number | The identifier of the route.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRouteById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the route. | 

### Return type

[**Route**](Route.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRoutesByAthleteId"></a>
# **getRoutesByAthleteId**
> [Route] getRoutesByAthleteId(id, opts)

List Athlete Routes

Returns a list of the routes created by the authenticated athlete using their athlete ID. Private routes are filtered out unless requested by a token with read_all scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.RoutesApi();

var id = 56; // Number | The identifier of the athlete.

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
apiInstance.getRoutesByAthleteId(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The identifier of the athlete. | 
 **page** | **Number**| Page number. | [optional] 
 **perPage** | **Number**| Number of items per page. Defaults to 30. | [optional] [default to 30]

### Return type

[**[Route]**](Route.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

