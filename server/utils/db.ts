import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const _dirname = dirname(fileURLToPath(import.meta.url));
const dbDir = join(_dirname, '../../.data');
mkdirSync(dbDir, { recursive: true });

const dbPath = join(dbDir, 'sqlite.db');
export const db: DatabaseType = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

export interface User {
    id: number;
    email: string;
    name?: string;
    created_at: string;
}

export interface Session {
    id: string;
    user_id: number;
    expires_at: string;
    created_at: string;
}
