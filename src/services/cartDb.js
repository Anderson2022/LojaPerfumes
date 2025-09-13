import initSqlJs from 'sql.js';

let db = null;
const DB_NAME = 'cart_db'; // Name for localStorage key

const SQL_WASM_PATH = '/sql-wasm.wasm'; // Adjust path if necessary

async function initDb() {
  if (db) return; // Already initialized

  try {
    const SQL = await initSqlJs({
      // eslint-disable-next-line no-unused-vars
      locateFile: _ => SQL_WASM_PATH
    });

    const savedDb = localStorage.getItem(DB_NAME);
    if (savedDb) {
      // Load database from localStorage
      const uint8Array = new Uint8Array(JSON.parse(savedDb));
      db = new SQL.Database(uint8Array);
      console.log("SQLite database loaded from localStorage.");
    } else {
      // Create a new database
      db = new SQL.Database();
      // Create cart table if it doesn't exist
      db.run(`
        CREATE TABLE IF NOT EXISTS cart (
          id INTEGER PRIMARY KEY,
          name TEXT,
          price TEXT,
          image TEXT,
          brand TEXT,
          quantity INTEGER
        );
      `);
      console.log("New SQLite database initialized and cart table created.");
      saveDb(); // Save the newly created empty database
    }
  } catch (err) {
    console.error("Failed to initialize SQLite database:", err);
  }
}

function saveDb() {
  if (!db) {
    console.error("Database not initialized, cannot save.");
    return;
  }
  const binaryArray = db.export();
  localStorage.setItem(DB_NAME, JSON.stringify(Array.from(binaryArray)));
  console.log("SQLite database saved to localStorage.");
}

function getCartItems() {
  if (!db) {
    console.error("Database not initialized.");
    return [];
  }
  const res = db.exec("SELECT * FROM cart;");
  if (res.length === 0) return [];

  const columns = res[0].columns;
  const values = res[0].values;

  return values.map(row => {
    const item = {};
    columns.forEach((col, idx) => {
      item[col] = row[idx];
    });
    return item;
  });
}

function addOrUpdateCartItem(product) {
  if (!db) {
    console.error("Database not initialized.");
    return;
  }

  const existingItem = db.exec("SELECT quantity FROM cart WHERE id = ?;", [product.id]);
  if (existingItem.length > 0) {
    // Update quantity
    db.run("UPDATE cart SET quantity = quantity + 1 WHERE id = ?;", [product.id]);
  } else {
    // Insert new item
    db.run(
      "INSERT INTO cart (id, name, price, image, brand, quantity) VALUES (?, ?, ?, ?, ?, ?);",
      [product.id, product.name, product.price, product.image, product.brand, 1]
    );
  }
  saveDb(); // Save after modification
}

function removeCartItem(itemId) {
  if (!db) {
    console.error("Database not initialized.");
    return;
  }
  db.run("DELETE FROM cart WHERE id = ?;", [itemId]);
  saveDb(); // Save after modification
}

export { initDb, getCartItems, addOrUpdateCartItem, removeCartItem };
