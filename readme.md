## 📚 Legal Document Portal - Backend POST API

A simple backend POST API for Legal Document Portal. It provides 3 hardcoded legal data.

### Live link: https://legal-server-phi.vercel.app/generate

#### 🛠️ Technologies used:  Express js , Node js and TypeScript.

#### ✨ Features :

- `/generate` POST endpoint to get document summaries.
- Uses 3 hardcoded legal documents (Contract, Criminal, Employment Law).
- Matches keywords from user query to return the most relevant document.
- Clean and modular structure (`routes/`, `data/`, `interface/`).


#### ⚙️ How to Set Up Locally

- First you have to install node and github in your machine.
- then git clone the repository or download the zip file
- in root folder go to the terminal, hit - `npm i` then `npm run dev` to run the project
- The API will be available at:  `http://localhost:5000/generate` in your browser,  `Method: POST `. 



