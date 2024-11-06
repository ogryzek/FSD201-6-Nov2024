# TECH FSD201-6 Backend Development - Part 1  
  
## Exercise 1  
  
Perform a web search for "Blizzard developer API documentation" and read the documentation. Select one of the available API endpoints, and write a NodeJS application that calls that API and prints the response to the console.  
  
Of course, there are some caveats. You will need to register for API Access, and generate an access token using your API access client id and client secrets.

The [Getting Started](https://develop.battle.net/documentation/guides/getting-started) guide is a great place to start. You may notice that there is a method using `curl` to generate the access token that looks like this:  
  
```sh
curl -u {client_id}:{client_secret} -d grant_type=client_credentials https://oauth.battle.net/token
```

Try replacing `{client_id}` and `{client_secret}` with the values from an API Access Client from the developer portal (https://develop.battle.net/access/clients).

This should return an access token: 

```
{"access_token":"{access_token}","token_type":"bearer","expires_in":86399,"sub":"{client_id}"}
```

That you can use to make requests, such as this:
```
# fetch one hearthstone card
curl -H "Authorization: Bearer {access_token}" https://us.api.blizzard.com/hearthstone/cards/52119-arch-villain-rafaam?locale=en_us
```