import fs from 'fs'


//define the database access and node this file to create the .env file with crentials



function createFiles() {

    let env = "HOST= \nUSER= \nPASSWORD= \nDATABASE="
    let ignore = "*.env"

    fs.writeFileSync('./easy-crud/.env', `${env}`, function (err) {
        if (err) { throw err }

    });

    fs.writeFileSync('.gitignore', `${ignore}`, function (err) {
        if (err) { throw err }

    });

}

createFiles()
