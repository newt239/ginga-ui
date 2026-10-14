CREATE TABLE IF NOT EXISTS theme_generations (
  id SERIAL PRIMARY KEY,
  model TEXT NOT NULL,
  prompt TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  response TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS theme_generations_created_at_idx ON theme_generations (created_at);
