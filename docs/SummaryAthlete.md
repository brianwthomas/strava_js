# StravaApiV3.SummaryAthlete

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceState** | **Number** | Resource state, indicates level of detail. Possible values: 1 -&gt; \&quot;meta\&quot;, 2 -&gt; \&quot;summary\&quot;, 3 -&gt; \&quot;detail\&quot; | [optional] 
**firstname** | **String** | The athlete&#39;s first name. | [optional] 
**lastname** | **String** | The athlete&#39;s last name. | [optional] 
**profileMedium** | **String** | URL to a 62x62 pixel profile picture. | [optional] 
**profile** | **String** | URL to a 124x124 pixel profile picture. | [optional] 
**city** | **String** | The athlete&#39;s city. | [optional] 
**state** | **String** | The athlete&#39;s state or geographical region. | [optional] 
**country** | **String** | The athlete&#39;s country. | [optional] 
**sex** | **String** | The athlete&#39;s sex. | [optional] 
**friend** | **String** | Whether the currently logged-in athlete follows this athlete. | [optional] 
**follower** | **String** | Whether this athlete follows the currently logged-in athlete. | [optional] 
**premium** | **Boolean** | Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription. | [optional] 
**summit** | **Boolean** | Whether the athlete has any Summit subscription. | [optional] 
**createdAt** | **Date** | The time at which the athlete was created. | [optional] 
**updatedAt** | **Date** | The time at which the athlete was last updated. | [optional] 


<a name="SexEnum"></a>
## Enum: SexEnum


* `M` (value: `"M"`)

* `F` (value: `"F"`)




<a name="FriendEnum"></a>
## Enum: FriendEnum


* `pending` (value: `"pending"`)

* `accepted` (value: `"accepted"`)

* `blocked` (value: `"blocked"`)




<a name="FollowerEnum"></a>
## Enum: FollowerEnum


* `pending` (value: `"pending"`)

* `accepted` (value: `"accepted"`)

* `blocked` (value: `"blocked"`)




