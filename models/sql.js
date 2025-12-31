// Holds SQL commands so models can use them
const sqlObject = {
    // USERS
    register: "INSERT INTO users_tb (fullname, email, password, role) VALUES (?,?,?,?)",
    findUserByEmail: "SELECT * FROM users_tb WHERE email = ?",

    // PRODUCTS
    getProducts: "SELECT * FROM products",
    getProductById: "SELECT * FROM products WHERE id = ?",
    addProduct: "INSERT INTO products (name, description, price, stock) VALUES (?,?,?,?)",
    updateProduct: "UPDATE products SET name=?, description=?, price=?, stock=? WHERE id=?",
    deleteProduct: "DELETE FROM products WHERE id=?",

    // CART
    addToCart: "INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?,?,?)",
    getCart: `SELECT c.id, p.name, p.price, c.quantity FROM cart_items c 
              JOIN products p ON c.product_id = p.id WHERE c.user_id = ?`,
    removeFromCart: "DELETE FROM cart_items WHERE id=?",

    // ORDERS
    createOrder: "INSERT INTO orders (user_id, total_amount, status) VALUES (?,?,?)",
    addOrderItem: "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?,?,?,?)",
    getOrders: "SELECT * FROM orders WHERE user_id = ?",
    updateOrderStatus: "UPDATE orders SET status=? WHERE id=?"
};

module.exports = sqlObject;