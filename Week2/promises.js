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
