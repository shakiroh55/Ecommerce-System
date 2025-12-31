// Holds SQL commands so models can use them
const sqlObject = {
    // USERS
    register: "INSERT INTO users_tb (fullname, email, password, role) VALUES (?,?,?,?)",
    findUserByEmail: "SELECT * FROM users_tb WHERE email = ?",

    // PRODUCTS
    getProducts: "SELECT * FROM products_tb",
    getProductById: "SELECT * FROM products_tb WHERE product_id = ?",
    addProduct: "INSERT INTO products_tb (product_name, description, price, stock) VALUES (?,?,?,?)",
    updateProduct: "UPDATE products_tb SET product_name=?, description=?, price=?, stock=? WHERE product_id=?",
    deleteProduct: "DELETE FROM products_tb WHERE product_id=?",
    // CART
    addToCart: "INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?,?,?)",
    getCart: `SELECT c.id, p.product_name, p.price, c.quantity FROM cart_items c 
              JOIN products_tb p ON c.product_id = p.product_id WHERE c.user_id = ?`,
    removeFromCart: "DELETE FROM cart_items WHERE id=?",

    // ORDERS
    createOrder: "INSERT INTO orders_tb (user_id, total_amount, status) VALUES (?,?,?)",
    addOrderItem: "INSERT INTO order_items_tb (order_id, product_id, quantity, price) VALUES (?,?,?,?)",
    getOrders: "SELECT * FROM orders_tb WHERE user_id = ?",
    updateOrderStatus: "UPDATE orders_tb SET status=? WHERE id=?"
};

module.exports = sqlObject;