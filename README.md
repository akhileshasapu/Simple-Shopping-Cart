# Simple Shopping Cart 🛒

A minimal **e-commerce site** to list products and manage a shopping cart.
This project demonstrates fullstack development with a **Java Spring Boot backend** and a **React.js frontend**.

---

## Project Goal

Build a simple shopping cart system where users can:

* Browse a list of products.
* Add products to a cart.
* Manage quantities.
* Checkout and send cart data to the backend.

---

## Core Features

### Backend

* **GET /products**
  Returns a hardcoded JSON list of products (id, name, price, imageUrl).
  Example product JSON:

  ```json
  {
    "id": 1,
    "name": "Product 1",
    "price": 499,
    "imageUrl": "https://example.com/product1.jpg"
  }
  ```

* **POST /checkout**
  Accepts a list of product IDs and quantities, logs the order to the console, and returns a success message.
  Example request body:

  ```json
  [
    { "id": 1, "quantity": 2 },
    { "id": 3, "quantity": 1 }
  ]
  ```

> No database is required for this simple version; data is hardcoded.

---

### Frontend

* Fetches and displays products in a grid layout.
* "Add to Cart" button for each product.
* Cart state is managed on the client-side using **React Context API**.
* Cart view (modal or separate page) showing:

  * Items
  * Quantities
  * Total price
* "Checkout" button sends cart data to the backend.

---

### Bonus Features ✨

* Users can change item quantities in the cart.
* Persist cart in `localStorage` to survive page refresh.
* Backend test cases for `/products` endpoint (JUnit).

---

## Getting Started

### Prerequisites

* **Java 17+**
* **Maven**
* **Node.js 18+**
* **Git**

---

### Backend Setup

1. Navigate to backend folder:

   ```bash
   cd Backend/ecommerce
   ```

2. Build the project:

   ```bash
   mvn clean install
   ```

3. Run the backend server:

   ```bash
   mvn spring-boot:run
   ```

4. Backend will be available at:

   ```
   http://localhost:8080
   ```

---

### Frontend Setup

1. Navigate to frontend folder:

   ```bash
   cd Frontend/simple-cart-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

4. Open browser at:

   ```
   http://localhost:5173
   ```

> Make sure the backend is running to fetch product data.

---

## Running Test Cases

**Backend JUnit Tests:**

```bash
cd Backend/ecommerce
mvn test
```

> Test example: `/products` endpoint should return 5-10 hardcoded products.

---

## Design Choices & Assumptions

* **Backend:** Hardcoded JSON to simplify initial setup; DTOs used for request/response clarity.
* **Frontend:** React Context API for global cart state management.
* **UI/UX:** Tailwind CSS for responsive, clean design.
* **Cart Data:** Optionally persisted in `localStorage`.

---

## Submission

This project is submitted for the **ASE Challenge** to demonstrate:

* Separation of frontend and backend.
* API integration.
* Effective state management.
* Core shopping cart functionality.

---

## Author

**Satya Akhilesh Asapu**

* GitHub: [https://github.com/akhileshasapu/Simple-Shopping-Cart](https://github.com/akhileshasapu/Simple-Shopping-Cart)
* Location: Visakhapatnam, India
* Role: Associate Software Engineer (ASE)
