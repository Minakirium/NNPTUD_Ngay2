// --- Câu 1: Constructor Function ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- Câu 2: Khởi tạo mảng products ---
const products = [
    new Product(1, "Laptop Gaming", 35000000, 5, "Electronics", true),
    new Product(2, "Chuột không dây", 800000, 15, "Accessories", true),
    new Product(3, "Bàn phím cơ", 2000000, 0, "Accessories", false),
    new Product(4, "Màn hình 4K", 12000000, 3, "Electronics", true),
    new Product(5, "Tai nghe Bluetooth", 1500000, 10, "Accessories", true),
    new Product(6, "iPhone 15 Pro Max", 32000000, 2, "Electronics", true)
];

console.log("--- Câu 2: Danh sách sản phẩm gốc ---", products);

// --- Câu 3: Mảng mới chỉ chứa name và price ---
const namePriceList = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", namePriceList);

// --- Câu 4: Lọc sản phẩm còn hàng (quantity > 0) ---
const availableProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", availableProducts);

// --- Câu 5: Có sản phẩm nào giá > 30.000.000 không? ---
const hasExpensive = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensive);

// --- Câu 6: Tất cả Accessories có isAvailable = true không? ---
const allAccOk = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6:", allAccOk);

// --- Câu 7: Tổng giá trị kho hàng ---
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log("Câu 7 - Tổng giá trị kho:", totalValue.toLocaleString() + " VND");

// --- Câu 8: Dùng for...of in ra thông tin ---
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// --- Câu 9: Dùng for...in in ra thuộc tính và giá trị (ví dụ SP1) ---
console.log("Câu 9:");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// --- Câu 10: Tên các sản phẩm đang bán và còn hàng ---
const finalNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10:", finalNames);