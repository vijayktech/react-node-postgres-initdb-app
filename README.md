
# React Node Postgres InitDB App

## Docker Commands

Stop and remove containers, networks, and volumes:

```bash
docker compose down -v
```

Build and start containers:

```bash
docker compose up --build
```

## Connect to PostgreSQL Database inside the Container

```bash
docker exec -it react-node-postgres-initdb-app-db-1 psql -U postgres -d mydb
```
