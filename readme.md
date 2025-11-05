# 🧠 AI Resume Builder

The **AI Resume Builder** is an intelligent web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** that allows users to **create, edit, and download professional resumes effortlessly**.
Powered by **AI integration (OpenAI API)**, it can generate professional summaries, suggest skill improvements, and offer instant editing assistance.
Designed for job seekers, students, and professionals — this app combines **modern design**, **AI features**, and **real-time customization** to make resume creation smarter, faster, and easier.

---

## 🚀 Features

* 🧠 **AI-Powered Resume Writing** – Generate professional summaries and experience descriptions using OpenAI.
* 🧾 **Live Resume Builder** – Add personal info, skills, education, and experience with instant preview.
* 🎨 **Multiple Templates** – Choose from *Modern*, *Minimal*, and *Classic* templates.
* 🌈 **Accent Color Customization** – Change colors in real time for personalization.
* 📤 **Upload Existing Resume** – Import and enhance your resume with AI suggestions.
* 💾 **Download as PDF** – Save resumes in a professional PDF format instantly.
* 🔒 **Secure Login System** – Register and manage resumes safely.
* 📱 **Responsive UI** – Seamlessly optimized for desktop, tablet, and mobile.
* 🧩 **Public/Private Mode** – Control visibility with privacy settings.

---

## 📸 Screenshots & Demo

Below are some snapshots of the **AI Resume Builder** in action 👇

### 🏠 Home Page

Displays a clean landing interface with CTA to start building a resume.
![Home Page](/screenshot/homepage.png)

---

### Dashboard

dashboard to manage multiple resumes.
![Dashboard](/screenshot/dashboard.png)

---

### 🧑‍💼 Resume Editor

Dynamic editor where users can add, edit, or remove sections like education, projects, and experience.
![Resume Editor](/screenshot/editor.png)

---

### 🎨 Template Preview

Switch between different resume templates in real time with color customization.
![Templates Preview](/screenshot/template.png)


---
### 🧠 AI Summary Generator

AI integration helps generate professional summaries and section descriptions.
![AI Summary Generator](/screenshot/ai-summary.png)

---

### 📄 Download as PDF

Preview and download your final resume in a clean and print-ready PDF format.
![PDF Download](/screenshot/pdf-download.png)

---

### 🔑 Authentication & Dashboard

Secure user login and personal dashboard to manage multiple resumes.
![Dashboard](/screenshot/login.png)

---

## 🧰 Tech Stack

### **Frontend**

* ⚛️ React.js – For interactive UI components.
* 🎨 Tailwind CSS – Modern, responsive styling framework.
* 🔗 Axios – For handling API requests.
* 💡 Lucide React Icons – Clean vector icons.

### **Backend**

* 🟢 Node.js – JavaScript runtime for backend logic.
* ⚙️ Express.js – For RESTful API development.
* 🧠 OpenAI API – AI-based resume suggestions and content generation.

### **Database**

* 🍃 MongoDB – For data storage and retrieval.
* 🧱 Mongoose – Schema-based ORM for MongoDB.

### **Deployment**

* 🌐 Render – For hosting frontend and backend.
* ☁️ MongoDB Atlas – Cloud-based database hosting.

---

## 🗂️ Folder Structure

```
AI-Resume-Builder/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Main pages (Home, Dashboard, Editor)
│   │   ├── templates/       # Resume templates (Modern, Minimal, Classic)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── routes/              # Express API routes
│   ├── models/              # MongoDB schemas
│   ├── controllers/         # Business logic
│   ├── server.js            # Server entry point
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
```

### 2️⃣ Install Dependencies

**Backend Setup:**

```bash
cd server
npm install
```

**Frontend Setup:**

```bash
cd ../client
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `server/` folder:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

### 4️⃣ Run the Application

**Start Backend:**

```bash
cd server
npm run dev
```

**Start Frontend:**

```bash
cd ../client
npm start
```

### 5️⃣ Build for Production

```bash
npm run build --prefix client
```

---

## 🌍 Deployment

Deployed on **Render**

* Frontend: React App
* Backend: Node.js + Express
* Database: MongoDB Atlas

🔗 **Example Live Demo:**
👉 [https://your-app.onrender.com](https://resume-builder-ycew.onrender.com/)

---

## 👨‍💻 Author

**Vedant Agrawal**
💼 Full Stack Developer | MERN | AI Integration Enthusiast
📧 Email: [[vedantagrawal2904@gmail.com](mailto:vedantagrawal2904@gmail.com)]
🔗 github : 

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

## 💡 Future Enhancements

* 🗣️ **AI Interview Question Suggestions** based on your resume.
* 🧠 **Smart Resume Scoring** system for performance insights.
* 📊 **Analytics Dashboard** to track recruiter engagement.
* 🌈 **More Templates & Export Formats** (Word, PNG, JSON).
* 🪄 **Resume Parsing** for uploaded documents.

---

> ⚡ *“Your dream job starts with a perfect resume — built smartly with AI.”*

---

Would you like me to make this **README visually enhanced with emojis + centered banner/title** (like a modern GitHub README style with a logo, badges, and section dividers)?
That would make it look even more premium and professional for recruiters and visitors.
