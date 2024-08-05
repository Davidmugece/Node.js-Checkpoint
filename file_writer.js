const fs = require('fs');

const createFile = (fileName, fileContent) => {
    try {
        fs.writeFileSync(fileName, fileContent);
        console.log('File created successfully');
    }
    catch (err) {
        console.error('error creating file');
    }


}

createFile("welcome.txt", "Welcome to the Node.js world");
createFile("hello.txt", "Hello World");