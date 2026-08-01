# Notes API

REST API для керування нотатками з повною системою автентифікації користувачів.

## 🚀 Технології

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer
* Cloudinary
* Nodemailer
* Brevo SMTP
* Handlebars
* Cookie Parser
* CORS
* Celebrate / Joi
* dotenv

---

## ✨ Можливості

### Authentication

* Реєстрація користувача
* Вхід у систему
* Вихід із системи
* Refresh Access Token
* HTTP-only Cookies
* Хешування паролів за допомогою bcrypt

### Password Recovery

* Надсилання листа для відновлення пароля
* JWT Reset Token
* HTML Email Template (Handlebars)
* Зміна пароля за токеном

### User

* Отримання інформації про користувача
* Завантаження аватара
* Зберігання аватара у Cloudinary

### Notes

* Створення нотатки
* Отримання списку нотаток
* Отримання нотатки за ID
* Оновлення нотатки
* Видалення нотатки
* Валідація вхідних даних

---

## 📂 Структура проєкту

```text
src/
│
├── controllers/
├── db/
├── middleware/
├── models/
├── routes/
├── services/
├── templates/
├── utils/
├── server.js
```

---

## ⚙️ Встановлення

Клонувати репозиторій

```bash
git clone <repository-url>
```

Перейти до директорії проєкту

```bash
cd nodejs-app
```

Встановити залежності

```bash
npm install
```

Створити файл `.env`

```env
PORT=3000

MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_URL=
MONGODB_DB=

JWT_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=

FRONTEND_DOMAIN=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## ▶️ Запуск

Режим розробки

```bash
npm run dev
```

Продакшн

```bash
npm start
```

---

## 📌 API Endpoints

### Auth

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /auth/register         |
| POST   | /auth/login            |
| POST   | /auth/logout           |
| POST   | /auth/refresh          |
| POST   | /auth/send-reset-email |
| POST   | /auth/reset-password   |

---

### User

| Method | Endpoint         |
| ------ | ---------------- |
| PATCH  | /users/me/avatar |

---

### Notes

| Method | Endpoint   |
| ------ | ---------- |
| GET    | /notes     |
| GET    | /notes/:id |
| POST   | /notes     |
| PATCH  | /notes/:id |
| DELETE | /notes/:id |

---

## ☁️ Cloudinary

Аватари користувачів зберігаються в Cloudinary.

---

## 📧 Email

Для надсилання листів використовується:

* Brevo SMTP
* Nodemailer
* Handlebars Email Templates

---

## 🔒 Безпека

* JWT Authentication
* HTTP-only Cookies
* bcrypt Password Hashing
* Request Validation
* File Upload Validation
* Обмеження розміру завантаження файлів

---

## 📜 Ліцензія

Цей проєкт створений у навчальних цілях під час проходження курсу GoIT.
