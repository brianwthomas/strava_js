# StravaApiV3.SummarySegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique identifier of this segment | [optional] 
**name** | **String** | The name of this segment | [optional] 
**activityType** | **String** |  | [optional] 
**distance** | **Number** | The segment&#39;s distance, in meters | [optional] 
**averageGrade** | **Number** | The segment&#39;s average grade, in percents | [optional] 
**maximumGrade** | **Number** | The segments&#39;s maximum grade, in percents | [optional] 
**elevationHigh** | **Number** | The segments&#39;s highest elevation, in meters | [optional] 
**elevationLow** | **Number** | The segments&#39;s lowest elevation, in meters | [optional] 
**startLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**endLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**climbCategory** | **Number** | The category of the climb | [optional] 
**city** | **String** | The segments&#39;s city. | [optional] 
**state** | **String** | The segments&#39;s state or geographical region. | [optional] 
**country** | **String** | The segment&#39;s country. | [optional] 
**_private** | **Boolean** | Whether this segment is private. | [optional] 
**athletePrEffort** | [**SummarySegmentEffort**](SummarySegmentEffort.md) |  | [optional] 


<a name="ActivityTypeEnum"></a>
## Enum: ActivityTypeEnum


* `Ride` (value: `"Ride"`)

* `Run` (value: `"Run"`)




