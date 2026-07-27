// Master Data Object
const inventory = {
  "Laptop": { price: 800, stock: 5 },
  "Smartphone": { price: 500, stock: 12 },
  "Headphones": { price: 50, stock: 25 },
  "Keyboard": { price: 40, stock: 15 },
  "Monitor": { price: 200, stock: 8 }
};

function renderDashboard() {
  // -------------------------------------------------------------
  // 1. Object.keys() - প্রোডাক্টের নামগুলোর অ্যারে পেতে
  // -------------------------------------------------------------
  const productNames = Object.keys(inventory);
  document.getElementById('totalProducts').innerText = productNames.length; 
  // Output: 5


  // -------------------------------------------------------------
  // 2. Object.values() - শুধু মানগুলোর (Price & Stock) অ্যারে পেতে
  // -------------------------------------------------------------
  const productValues = Object.values(inventory);

  // মোট স্টক হিসাব
  const totalStock = productValues.reduce((sum, item) => sum + item.stock, 0);
  document.getElementById('totalStock').innerText = totalStock;

  // মোট ইনভেন্টরি ভ্যালু হিসাব
  const totalValue = productValues.reduce((sum, item) => sum + (item.price * item.stock), 0);
  document.getElementById('totalValue').innerText = `$${totalValue}`;


  // -------------------------------------------------------------
  // 3. Object.entries() - [Key, Value] জোড়া ধরে টেবিল জেনারেট করতে
  // -------------------------------------------------------------
  const tableBody = document.getElementById('inventoryTable');
  tableBody.innerHTML = ""; // Clear existing rows

  // Object.entries(inventory) ফেরত দেবে:
  // [ ["Laptop", {price: 800, stock: 5}], ["Smartphone", {...}] ]
  Object.entries(inventory).forEach(([name, details]) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td><strong>${name}</strong></td>
      <td>$${details.price}</td>
      <td>${details.stock} units</td>
      <td>$${details.price * details.stock}</td>
    `;

    tableBody.appendChild(row);
  });
}

// জেনারেট ফাংশন কল
renderDashboard();