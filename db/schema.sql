CREATE TABLE messages
(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  chat_id UUID,
  user_id UUID,
  content VARCHAR,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
  -- without timezone
);
