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

Here's an example using Axios that is pretty much equivalent to `curl https://www.google.com`. See if you can extend it consume the Blizzard API.

```js
const axios = require('axios');
const url = 'https://www.google.com'

axios.get(url)
.then( (resp) => {
    console.log(resp.data)
}).catch(e => {
    console.log('There was an error: ', e);
});

```

## Day 3
### Exercise 01  
  
Have a look at the solution for Do it yourself 3:

```js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const baseURL = req.protocol + '://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    const path = reqUrl.pathname;

    if (path === "/params") {
        const searchParams =
            new URLSearchParams(reqUrl.searchParams);
        res.write(searchParams.toString());
    }
    else {
        res.write("I don't know how to respond to that");
    }

    res.end();
}).listen(3001);
```
