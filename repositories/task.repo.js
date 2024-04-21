const database = require('../db/database');

function createTask(newTask) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tasks SET ?';
        database.sql.query(query, newTask, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

function findAllTasks(params) {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM tasks WHERE userId = ${params.userId}`;
        if (params.title) {
            query += ` AND title LIKE '%${params.title}'`;
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
    createTask,
    findAllTasks,
}
