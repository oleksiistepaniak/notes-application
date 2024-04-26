const database = require('../db/database');

function createNote(newNote) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO notes SET ?';
        database.sql.query(query, newNote, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

function findAllNotes(params) {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM notes WHERE userId = ${params.userId}`;
        if (params.title) {
           query += ` AND title LIKE '%${params.title}%'`;
        }
        database.sql.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

module.exports = {
    createNote,
    findAllNotes,
}
