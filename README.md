# 🛒 Simple Shopping Cart

A minimal **fullstack e-commerce site** with:

* **Backend:** Java Spring Boot
* **Frontend:** React.js + Tailwind CSS

This project shows how to build a basic cart system where users can browse products, add them to a cart, manage quantities, and checkout.

---

## 🎯 Project Goal

Build a simple shopping cart where users can:

* View a list of products.
* Add products to cart.
* Update quantities or remove items.
* Checkout → send data to backend.

---

## ⚡ Core Features

### Backend (Spring Boot)

* **GET /api/products** → Returns a hardcoded list of products (id, name, price, imageUrl).
* **POST /api/checkout** → Accepts cart JSON (`productId → quantity`), logs order, and returns success message.
* Data is hardcoded → no DB required.

Example product:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 55000,
  "imageUrl": "https://example.com/laptop.jpg"
}
```

---

### Frontend (React + Vite + Tailwind)

* Fetches products from backend and shows in a grid.
* Each product has "Add to Cart".
* Cart state managed with **React Context API**.
* Cart page/modal shows: items, quantities, total price.
* "Checkout" sends cart data to backend.
* Bonus: Cart persists in `localStorage` after refresh.

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Java 17+
* Maven
* Node.js 18+
* Git

---

### 📥 Clone Repository

```bash
# Clone the project
git clone https://github.com/akhileshasapu/Simple-Shopping-Cart.git

# Go inside project root
cd Simple-Shopping-Cart
```

---

### 🖥️ Backend Setup

```bash
# Go to backend folder
cd Backend/ecommerce

# Build the project
mvn clean install

# Run the backend server
mvn spring-boot:run
```

Backend runs at 👉 [http://localhost:8080](http://localhost:8080)

---

### 🌐 Frontend Setup

```bash
# Go to frontend folder
cd Frontend/simple-cart-frontend

# Install dependencies
npm install

# Start frontend dev server
npm run dev
```

Frontend runs at 👉 [http://localhost:5173](http://localhost:5173)

⚠️ Make sure backend is running first, otherwise products won’t load.

---

## 🧪 Running Tests (Backend Only)

```bash
cd Backend/ecommerce
mvn test
```

> Example test: `/api/products` should return 5–20 hardcoded products.

---

## 💡 Design Choices

* **Backend:** Hardcoded JSON for simplicity. DTOs used for clarity.
* **Cart Format:** `Map<Long, Integer>` (productId → quantity).
* **Frontend:** Context API for global cart state.
* **UI:** Tailwind CSS for responsive design.
* **Cart Persistence:** Saved in `localStorage`.

---

## 📌 Submission Notes

This project is made for the **ASE Challenge** to demonstrate:

* Clear frontend + backend separation.
* API integration.
* State management in React.
* Basic shopping cart functionality.

---

## 👨‍💻 Author

**Satya Akhilesh Asapu**

* 🌍 Visakhapatnam, India
* 🎓 Fresher
* 🔗 GitHub: [Simple Shopping Cart Repo](https://github.com/akhileshasapu/Simple-Shopping-Cart)
* 🌐 Portfolio: [akhileshasapuportfolio.vercel.app](https://akhileshasapuportfolio.vercel.app)
