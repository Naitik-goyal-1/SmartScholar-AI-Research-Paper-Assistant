# SmartScholar – AI-Based Research Paper Understanding System

<p align="center">
  <strong>Making Academic Research Easier with AI</strong>
</p>

SmartScholar is an AI-powered web application designed to simplify the process of understanding academic research papers. It helps students and researchers explore complex research content through AI-based analysis, interactive question answering, concept visualization, and mathematical equation extraction.

The platform aims to bring essential research assistance tools together in one place, making academic learning more accessible and efficient.

## ✨ Key Features

- **PDF Upload & Management:** Upload and organize research papers in PDF format.
- **AI Paper Analysis:** Analyze research papers and generate understandable summaries and explanations using Google Gemini.
- **AI Assistant:** Ask questions and interact with research-related content.
- **Concept Map:** Explore relationships between important concepts.
- **Equation Extractor:** Identify and extract mathematical equations from research content.
- **Research Roadmap:** Organize research-related learning and exploration.
- **User Authentication:** Secure login and registration using Supabase.
- **Dashboard:** Access research activities and application modules from one place.
- **Theme Settings:** Switch between light and dark modes.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| HTML5, CSS3, JavaScript | Web interface and functionality |
| Supabase | Authentication, database and file storage |
| PostgreSQL | Database management |
| Google Gemini API | AI-powered analysis and assistance |
| Node.js & npm | Development environment and package management |
| Git & GitHub | Version control and source code management |

## 🏗️ System Overview

SmartScholar follows a web-based architecture:

1. Users register or log in through Supabase Authentication.
2. Research papers are uploaded through the application.
3. Uploaded files are managed using Supabase Storage.
4. The application processes research content for AI-based analysis.
5. Google Gemini API provides AI-generated explanations and responses.
6. Users access the results through the dashboard and available modules.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm
- Git
- Supabase account
- Google Gemini API key

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/SmartScholar-AI-Research-Paper-Assistant.git
```

**2. Navigate to the project directory**

```bash
cd SmartScholar-AI-Research-Paper-Assistant
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the project root and add the required configuration:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Add any other environment variables required by your project's actual backend configuration. Keep secret API keys, especially Gemini API keys, on the server side. Never commit secrets to GitHub.

**5. Start the development server**

```bash
npm run dev
```

If your project uses a different development command, check the `scripts` section of `package.json`.

## 📂 Project Modules

| Module | Description |
|---|---|
| Dashboard | Central overview of research activities |
| My Papers | Upload and manage research papers |
| AI Assistant | Interactive AI-based question answering |
| Concept Map | Visual representation of related concepts |
| Equation Extractor | Extract mathematical equations |
| Research Roadmap | Support research planning and exploration |
| Profile & Settings | Manage account and application preferences |

## 🎯 Project Objectives

- Simplify complex academic research papers.
- Reduce the effort required to understand technical content.
- Provide AI-assisted explanations and research support.
- Combine multiple research assistance features in one platform.
- Improve the academic learning experience for students and beginners.

## 🔮 Future Scope

- Support for additional document formats.
- Improved research paper comparison.
- Advanced citation and reference assistance.
- Multilingual paper explanations.
- Enhanced concept visualization.
- More advanced research recommendation features.

## 👨‍💻 Developed By

**Naitik Goyal**

B.Tech – Mathematics & Computing  
Madhav Institute of Technology & Science (MITS), Gwalior

## 📄 License

This project is intended for academic and educational purposes. Add a suitable open-source license if you decide to distribute the source code publicly.

---

<p align="center">
  <strong>SmartScholar – Understand Research. Discover Knowledge. Learn Smarter.</strong>
</p>
