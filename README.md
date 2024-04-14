# SENG 513 Group 8 Project - Board Game Exchange

[![BGE Showcase Video](http://img.youtube.com/vi/AS2iXc5KaX4/0.jpg)](http://www.youtube.com/watch?v=AS2iXc5KaX4 "SENG 513 - Board Game Exchange Showcase")

## Members

Amnah Hussain - 30095907

Hao Nguyen - 30088094

Hy Huynh - 30087093

Marco Truong - 30090441

Rupert Amodia - 30085822


## Prerequisite

- Docker Compose
- Docker Engine
- MongoDB Compass

## How to build

- To compose the containers including seeding mockup data into database, run this:

```
docker compose  up --build
```

- After the containers run, open up your MongoDB Compass, and connect to the instance with this URI:

```
mongodb://admin:password@localhost:27017/
```

- Go into `bge-db` table and check for the mockup data inside any of the collections

- To bring the containers down and clear the database volume, run this:

```
docker compose down -v
```

- Othewise, if you want data to persist, run this:

```
docker compose down
```
