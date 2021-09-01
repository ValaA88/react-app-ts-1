import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read the PostgreSQL secret connection information
// (host, database, username, password) from the .env file

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getCardById(id) {
  const card = await sql`
    SELECT *
    FROM
      images
      WHERE
      id = ${id}
  `;

  return card[0];
}

export async function getUserByEmail(email) {
  // Return undefined if userId is not parseable
  // to an integer
  if (!email) return undefined;

  // SELECT * FROM users WHERE username = `username` AND password = `passwordHash`

  const users = await sql`
    SELECT
      *
    FROM
      users
    WHERE
      username = ${username}
  `;
  console.log('users in DB', users);
  return users;
}

export async function insertUser(firstName, lastName, email, passwordHash) {
  const users = await sql`
    INSERT INTO users
      (first_name, last_name, email, password)
    VALUES
      (${firstName}, ${lastName}, ${email}, ${passwordHash})
  `;
  return users;
}
