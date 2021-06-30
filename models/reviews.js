const db = require('./conn');

class Reviews {
    constructor(id, user_id, wine_id, reviews) {
        this.id= id;
        this.user_id = user_id;
        this.wine_id = wine_id;
        this.reviews = reviews;
    }
async getReviews() {
try {
    const query =  `SELECT * FROM reviews WHERE wine_id = ${this.wine_id}`;
    const response = await db.any(query);
    return response;
}catch (err) {
    return err.message;
    }
}


async addReview() {
    try {
        const query = `INSERT INTO reviews (user_id, wine_id, reviews) VALUES(${this.user_id}, ${this.wine_id}, ${this.reviews})`;
        const response = await db.result(query);
        console.log('response', response);
        return response;
    }catch (err) {
        return err.message;
        }
    }
}


module.exports = Reviews;