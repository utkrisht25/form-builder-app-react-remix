# Form Builder App (React + Remix)
A customizable and dynamic form builder built using **React**, **Remix**, **Redux**, and **Tailwind CSS**. Users can create multi-step forms with real-time preview, drag-and-drop fields, and dark mode support.

🌐 **Live Demo**: [https://form-builder-app-react-remix.netlify.app](https://form-builder-app-react-remix.netlify.app)
**Demo Video** : [https://drive.google.com/file/d/1d3To-GtuvPSeq5rIMuupp6E2SqH5JClP/view?usp=sharing](https://drive.google.com/file/d/1d3To-GtuvPSeq5rIMuupp6E2SqH5JClP/view?usp=sharing)

---

## 🚀 Features

- 🧩 Drag-and-drop form builder
- ✨ Real-time form preview
- 📄 Multi-step forms
- 🎨 Dark/Light theme toggle
- 💾 Save & Load form templates
- 🔗 Shareable form links
- ⏪ Undo/Redo functionality
- ⚙️ Field customization & reordering
- 🧠 State management using Redux
- 🌙 Tailwind-based dark mode support

---

## 🧰 Tech Stack

- [React](https://reactjs.org/)
- [Remix](https://remix.run/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)
- [Netlify](https://www.netlify.com/) (Deployment)

---
## 📂 Project Structure
form-builder-app-react-remix/
├── app/
│ ├── components/ # UI components
│ ├── context/ # Theme context
│ ├── data/ # Loader & action data
│ ├── routes/ # App routes
│ ├── store/ # Redux store
│ ├── tailwind.css # Tailwind import
│ ├── root.jsx # Remix root layout
│ ├── entry.client.jsx # Client entry point
│ └── entry.server.jsx # Server entry point
├── public/ # Static assets
├── remix.config.js # Remix config
├── tailwind.config.js # Tailwind config
├── postcss.config.cjs # PostCSS config
├── server.js # Express (if used)
└── README.md

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/utkrisht25/form-builder-app-react-remix.git
cd form-builder-app-react-remix
npm install

Development 
npm run dev
🔧 Build for Production
npm run build
```

🌐 Deployment on Netlify
This app is deployed on Netlify.

Make sure to set the following build settings:

Build command: npm run build

Publish directory: public

Base directory: .

🙌 Author
Made with 💻 by Utkrisht Yogi

📃 License
This project is licensed under the MIT License.
