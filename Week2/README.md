# Promises  

  - [Using promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - [Promise Tutorial](https://javascript.info/promise-basics)
  - [Introduction to Node.js (LFW111) - Linux Foundation - Education (up to Week 2)](https://training.linuxfoundation.org/training/introduction-to-nodejs-lfw111/)
  - Chapter 6 – DIY 1  --> Slides 13-16  
    
Callback in Callback - not a good solution.
  
```js
const fs = require('fs');

fs.readFile('./data/data.json', 'utf-8', (err, data) => {
    if (err) return "couldn't read file";

    const product = "Ball";
    const exist = false;
    JSON.parse(data).forEach(element => {
        if (product === element.productName) exist = true;
    });

    const content = exist ? 'Ball exists' : 'Ball does not exist';

    fs.writeFile('./data/data1.json', content, err => {
        if (err) console.error(err);
    });
});

```

The solution is promises  
  
```js
const fs = require('fs');

const readFileData = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

const writeDataToFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, data, err => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFileData('./server/data/data1.json')
    .then(data => {
        data = JSON.parse(data);

        for (let i = 0; i < data.length; i++) {
            if (data[i].productName === "Ball")
                return data[i].productName;
        }

        return false;
    })
    .then(productName => {
        const output = productName ?
            `product ${productName}` : 'product Not exists';

        return writeDataToFile('./server/data/data2.json', output);
    })
    .then(() => console.log('data saved to file'))
    .catch((err) => console.error(err));

```

Async and Await  
  
```js
const fs = require('fs');

const readFileData = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const writeDataToFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const writingDataToFile = async () => {
    try {
        const data = JSON.parse(await readFileData('./server/data/data1.json'));
        let productName = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].productName === "Ball")
                productName = data[i].productName;
        }

        const output = productName ?
            `product ${productName} saved` : "product doesn't exist";

        return await writeDataToFile('./server/data/data2.json', output);
    }
    catch (e) {
        console.error(e);
    }
};

writingDataToFile()
    .then(x=> {
        console.log(x);
        console.log('data saved to file!');
    })
    .catch(err => console.error(`ERROR: ${err}`));

```