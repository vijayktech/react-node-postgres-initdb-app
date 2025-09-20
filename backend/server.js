import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const {
   Pool
} = pkg;
const app = express();
app.use(cors());
app.use(express.json());
const pool = new Pool({
   user: "postgres",
   host: "db",
   database: "mydb",
   password: "postgres",
   port: 5432
});
app.get("/api/hello", (req, res) => res.json({
   message: "Hello from Node.js Backend 👋"
}));
app.get("/api/users", async (req, res) => {
   try {
      const result = await pool.query("SELECT * FROM users");
      res.json(result.rows);
   } catch (err) {
      console.error(err);
      res.status(500).json({
         error: "Database error"
      });
   }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));