'use strict;'

const db = require('./conn');

class SummerWine {
    constructor (id, name, slug, taste, pairing, rating) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.taste = taste;
        this.pairing = pairing;
        this.rating = rating; 
    }

    static async getAllSummerWineData() {
        try {
            const response = await db.any(
                `SELECT * FROM SummerWine ORDER BY name;`
            )
            console.log('SQL RESPONSE IS:', response);
            return response;
        }catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
}

module.exports = SummerWine;