const csv = require('csv-parser')
const fs = require('fs')

function getCSVToJson() {
    const output = [];
    fs.createReadStream('input.csv')
        .pipe(csv({}))
        .on('data', (data) => {
            output.push(data)

        })
        .on('end', () => {
            let json = JSON.stringify(output);
            fs.writeFile('output.json', json, (e) => {
                if (e) throw e;
                console.log(`Arquivo criado`);
            })
        })
}

getCSVToJson();