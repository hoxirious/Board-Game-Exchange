# SENG 513 Group 8 Project - Board Game Exchange

## Members

Amnah Hussain - 30095907

Hao Nguyen - 30088094

Hy Huynh - 30087093

Marco Truong - 30090441

Rupert Amodia - 30085822


## Prerequisite
- docker compose
- docker engine
- MongoDB Compass

## Run Docker Compose

- To compose the containers including seeding mockup data into database, run this:

```
docker compose  up --build
```

- After the containers run, open up your MongoDB Compass, and connect to the instance with this URI:

```
mongodb://admin:password@localhost:27017/
```

- Go into bge-db table and check any of the collection for the mockup data.


- To bring the containers down, run this:
```
docker compose down -v
```

