const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const port = 5001;

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "passcode",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function connectToDatabase() {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado ao banco de dados MySQL");
    connection.release();
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  }
}

connectToDatabase();

app.post("/register", async (req, res) => {
  const sql =
    "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  try {
    const [result] = await pool.query(sql, values);
    res.json(result);
  } catch (err) {
    console.error("Erro ao inserir dados:", err);
    res.status(500).json("Erro");
  }
});

app.post("/login", async (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  try {
    const [rows] = await pool.query(sql, [req.body.email, req.body.password]);
    if (rows.length > 0) {
      res.json("Success");
    } else {
      res.json("Error");
    }
  } catch (err) {
    console.error("Erro ao consultar dados:", err);
    res.status(500).json("Erro");
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
