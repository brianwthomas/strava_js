# StravaApiV3.DetailedSegmentEffort

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the segment on which this effort was performed | [optional] 
**activity** | [**MetaActivity**](MetaActivity.md) |  | [optional] 
**athlete** | [**MetaAthlete**](MetaAthlete.md) |  | [optional] 
**movingTime** | **Number** | The effort&#39;s moving time | [optional] 
**startIndex** | **Number** | The start index of this effort in its activity&#39;s stream | [optional] 
**endIndex** | **Number** | The end index of this effort in its activity&#39;s stream | [optional] 
**averageCadence** | **Number** | The effort&#39;s average cadence | [optional] 
**averageWatts** | **Number** | The average wattage of this effort | [optional] 
**deviceWatts** | **Boolean** | For riding efforts, whether the wattage was reported by a dedicated recording device | [optional] 
**averageHeartrate** | **Number** | The heart heart rate of the athlete during this effort | [optional] 
**maxHeartrate** | **Number** | The maximum heart rate of the athlete during this effort | [optional] 
**segment** | [**SummarySegment**](SummarySegment.md) |  | [optional] 
**komRank** | **Number** | The rank of the effort on the global leaderboard if it belongs in the top 10 at the time of upload | [optional] 
**prRank** | **Number** | The rank of the effort on the athlete&#39;s leaderboard if it belongs in the top 3 at the time of upload | [optional] 
**hidden** | **Boolean** | Whether this effort should be hidden when viewed within an activity | [optional] 


