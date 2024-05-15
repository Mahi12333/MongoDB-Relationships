
# MongoDB Relationships

This repository demonstrates how to implement various types of relationships in MongoDB using Mongoose and Node.js. It covers one-to-one, one-to-many, and many-to-many relationships.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Schemas](#schemas)
  - [One-to-One Relationship](#one-to-one-relationship)
  - [One-to-Many Relationship](#one-to-many-relationship)
  - [Many-to-Many Relationship](#many-to-many-relationship)
- [Controllers](#controllers)
- [Example Data](#example-data)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to model relationships in MongoDB using Mongoose. The examples include:

- **One-to-One Relationship**: Each individual has only one passport.
- **One-to-Many Relationship**: An author can write many books, but each book is written by only one author.
- **Many-to-Many Relationship**: Students can enroll in multiple courses, and courses can have multiple students.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahi12333/MongoDB-Relationships.git
   cd mongodb-relationships
   npm install
  MONGO_URI=mongodb://localhost:27017/yourdbname
  
  npm run dev
