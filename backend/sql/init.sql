CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name  TEXT NOT NULL,
    user_password   TEXT NOT NULL,
    email_id   TEXT UNIQUE NOT NULL,
    mobile_id  TEXT UNIQUE NOT NULL
);

-- Insert some sample users
INSERT INTO users (first_name, last_name, user_password, email_id, mobile_id)
VALUES
  ('Alice', 'Smith', 'asdfg', 'alice@example.com', '1234567890'),
  ('Bob', 'Johnson', 'asdfg', 'bob@example.com', '2345678901'),
  ('Charlie', 'Brown', 'asdfg', 'charlie@example.com', '3456789012'),
  ('John', 'Doe', 'asdfg', 'john@example.com', '4567890123')
ON CONFLICT DO NOTHING;
