# Ala – The New Wave (Full Stack E-commerce)

Modern, responsive lip gloss e-commerce platform with a **Next.js + Tailwind frontend** and **Node.js/Express + MongoDB backend**.

## Folder Structure

```bash
ALA-Cosmetics/
├── frontend/                # Next.js storefront
│   ├── app/                 # Pages (home, shop, product, cart, checkout, auth, etc.)
│   ├── components/          # Navbar, footer, product cards
│   ├── context/             # Cart, wishlist, dark mode state
│   └── data/                # Seed sample products
├── backend/                 # Express API + MongoDB models/routes/controllers
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   └── scripts/seed.js
└── README.md
```

## Features Included

- Home, Shop, Product Detail, About, Contact, Cart, Checkout, Login/Register, Order Confirmation pages
- Product filtering by shade + sorting by price
- Cart with quantity updates and remove item
- Wishlist functionality
- Dark mode toggle
- Stripe checkout session integration
- SEO metadata + responsive UI + smooth micro animations
- Backend auth (JWT), products CRUD (admin), orders API, email confirmation utility
- Admin-ready endpoints for product/user/order management

## 1) Installation

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:3000`

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs on `http://localhost:5000`

## 2) Environment Variables

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_xxx
```

Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/ala
JWT_SECRET=super_secure_secret
CLIENT_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_xxx
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_user
SMTP_PASS=your_pass
```

## 3) Stripe Setup

1. Create Stripe account and get test secret key.
2. Add `STRIPE_SECRET_KEY` to frontend/backend env files.
3. Ensure `NEXT_PUBLIC_SITE_URL` and `CLIENT_URL` match deployed domain.
4. Checkout page posts to Stripe session API and redirects to Stripe hosted checkout.

## 4) MongoDB Setup

1. Create MongoDB Atlas cluster.
2. Whitelist your IP.
3. Add connection URI to `MONGO_URI`.
4. (Optional) Seed starter product:
```bash
cd backend
npm run seed
```

## 5) Deployment (Vercel + Render/Railway)

### Frontend (Vercel)
1. Import `frontend` as project in Vercel.
2. Add env vars from `.env.local`.
3. Deploy.

### Backend (Render/Railway)
1. Deploy `backend` service.
2. Add env vars from `.env`.
3. Update frontend API base URLs to deployed backend URL as needed.

## 6) Admin Operations

Admin API endpoints (JWT admin token required):
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `GET /api/orders`

Promote a user to admin by setting `role: "admin"` in MongoDB.

---
Built for **Ala – The New Wave** with a luxury-playful, conversion-focused aesthetic.
