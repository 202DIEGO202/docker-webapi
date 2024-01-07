const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'myuser',
  host: 'db',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.use(express.json());
app.use(cors()); // Usa el middleware cors

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    const { rowCount } = await pool.query(query, [username, password]);

    if (rowCount === 1) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
