const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor (id, user_name, user_email, user_password){
        this.id=id;
        this.user_name=user_name;
        this.user_email=user_email;
        this.user_password=user_password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async addUser(user_name, user_email, user_password) {
        try {
            const query = `INSERT INTO users (user_name, user_email, user_password) VALUES ('${user_name}', '${user_email}', '${user_password}') RETURNING id;`;
            const response = await db.result(query);
            return response;
        }catch(error){
            console.error('ERROR:', error);
            return error;
        }
    }
}

async login() { 
    try {
        const query = `SELECT * FROM users WHERE user_email = '${this.user_email}';`;
        const response = await db.one(query);

        console.log('LOGIN RESPONSE OBJECT:', response);
        const isValid = this.checkPassword(response.password);

        if (!!isValid) {
            const {id, user_name} = response;
            return { isValid, user_id: id, user_name}
        }else {
            return { isValid}
        }
    }catch (error) {
        console.error('ERROR:', error);
        return error;
    }
    }


module.exports = User;