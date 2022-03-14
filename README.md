
# Players API

## Introduction

This is a code repository for Players API implemented using Nodejs, Express, Typescript and deployed using Firebase.

## Usage
 
* To get list of all players:

```shell
 GET: https://us-central1-players-f32ac.cloudfunctions.net/playersApi/players
#response sample: 
[
	{
		"id": "CDcz0Py9orWFzfz2PF2z",
		"name": "Leonel Messi",
		"team": "Paris Saint Germain",
		"number": "10"
	},
	{
        "id": "GHLf42QbEWUuTa6ogSBk",
        "name": "Naymar Jr.",
        "number": "11",
        "team": "Paris Saint Germain"
	},
	{
        "id": "tx9YXmH5N34hbBhD18Y4",
        "number": "7",
        "name": "Cristiano Ronaldo",
        "team": "Manchester United"
	}
]
```

* To get one player details:

```shell
 GET: https://us-central1-players-f32ac.cloudfunctions.net/playersApi/players/:id
#response sample: 
{
    "id": "tx9YXmH5N34hbBhD18Y4",
    "name": "Cristiano Ronaldo",
    "team": "Manchester United",
    "number": "7"
}
```
  
* To create a new player:

```shell
 POST: https://us-central1-players-f32ac.cloudfunctions.net/playersApi/players/
#body sample: 
{
    "name": "Kylian Mbape",
    "team": "Paris Saint Germain",
    "number": "9"
}
```

* To delete a player:

```shell
 DELETE: https://us-central1-players-f32ac.cloudfunctions.net/playersApi/players/:id
```

* Tp update a player: 

```shell
 PUT: https://us-central1-players-f32ac.cloudfunctions.net/playersApi/players/:id
#body sample: 
{
    "name": "Kylian Mbape",
    "team": "Paris Saint Germain",
    "number": "9"
}
```



