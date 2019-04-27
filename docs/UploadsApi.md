# StravaApiV3.UploadsApi

All URIs are relative to *https://www.strava.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUpload**](UploadsApi.md#createUpload) | **POST** /uploads | Upload Activity
[**getUploadById**](UploadsApi.md#getUploadById) | **GET** /uploads/{uploadId} | Get Upload


<a name="createUpload"></a>
# **createUpload**
> Upload createUpload(opts)

Upload Activity

Uploads a new data file to create an activity from. Requires activity:write scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.UploadsApi();

var opts = { 
  'file': "/path/to/file.txt", // File | The uploaded file.
  'name': "name_example", // String | The desired name of the resulting activity.
  'description': "description_example", // String | The desired description of the resulting activity.
  'trainer': "trainer_example", // String | Whether the resulting activity should be marked as having been performed on a trainer.
  'commute': "commute_example", // String | Whether the resulting activity should be tagged as a commute.
  'dataType': "dataType_example", // String | The format of the uploaded file.
  'externalId': "externalId_example" // String | The desired external identifier of the resulting activity.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUpload(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The uploaded file. | [optional] 
 **name** | **String**| The desired name of the resulting activity. | [optional] 
 **description** | **String**| The desired description of the resulting activity. | [optional] 
 **trainer** | **String**| Whether the resulting activity should be marked as having been performed on a trainer. | [optional] 
 **commute** | **String**| Whether the resulting activity should be tagged as a commute. | [optional] 
 **dataType** | **String**| The format of the uploaded file. | [optional] 
 **externalId** | **String**| The desired external identifier of the resulting activity. | [optional] 

### Return type

[**Upload**](Upload.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getUploadById"></a>
# **getUploadById**
> Upload getUploadById(uploadId)

Get Upload

Returns an upload for a given identifier. Requires activity:write scope.

### Example
```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new StravaApiV3.UploadsApi();

var uploadId = 789; // Number | The identifier of the upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUploadById(uploadId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadId** | **Number**| The identifier of the upload. | 

### Return type

[**Upload**](Upload.md)

### Authorization

[strava_oauth](../README.md#strava_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

