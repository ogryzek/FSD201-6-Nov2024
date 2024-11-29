# TECH FSD201-6 Backend Development - Part 1  

## Week 1 End of Week Exercises

Create a web-based game. It can be as elaborate as you would like or as simple as a text based interaction with some form of a start, a choice that the player makes, and an end.  
  
Try to only use modules that we have discussed this week and/or that are part of the Node standard library. Modules that you develop yourself are also fine.  
  
## Week 1 Do It Yourself - Home Practice Booklet  
  
  - Chapter 2 - DIY 1
  - Chapter 3 - DIY 1-3
  - Chapter 4 - DIY 1-3 
  - [LinuxFoundation Intro to Node.js (LFW111)](https://training.linuxfoundation.org/training/introduction-to-nodejs-lfw111/)  


## Week 2  
  
Example of writing to a file using an asynchronous function:  
```js
const fs = require('fs');

let data = 'hello\n';

for (let i=0; i<10; i++) {
    fs.appendFile(`lol.txt`, `${i}: ${data}`,  (err) => {
        if (err) throw err;
    });
}
```

Notice the output is not in sequential order:

```txt
0: hello
3: hello
6: hello
7: hello
8: hello
9: hello
1: hello
2: hello
5: hello
4: hello
```

