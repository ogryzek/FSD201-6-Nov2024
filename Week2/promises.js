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
        fs.writeFile(file, data, err => {
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
