CREATE TABLE IF NOT EXISTS notes (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
userId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES users(id)
);