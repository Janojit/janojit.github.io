import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Mail, FileText, ExternalLink } from "lucide-react";

// -----------------------------
// Replace these with your real links/assets before deployment
const RESUME_LINK = "/resume.pdf"; // add your resume to public/ as resume.pdf
const PHOTO_SRC = "/profile.jpg"; // optional: put a profile photo in public/

const projects = [
  {
    title: "Speech Completion Prediction",
    timeframe: "May–Jul. 2025",
    tools: "PyTorch, GloVe, MERN Stack",
    description:
      "Real-time semantic completion estimation for speeches using a fused BiGRU (supervised) + topic-modeling + LLM-reference approach. Deployed via MERN web interface.",
    link: "https://github.com/Team1-SpeechCompletion/Speech-Completion-Prediction",
    tags: ["NLP", "Deep Learning", "Full-stack"]
  },
  {
    title: "Multi-modal Hate Speech Detection",
    timeframe: "Apr.–May 2025",
    tools: "PyTorch, MobileNetV2, GloVe",
    description:
      "Built 6 multimodal architectures (text + image) and fusion strategies for robust hate-speech detection on MMHS150K.",
    link: "https://github.com/Janojit/Multi-modal-Hate-Speech-Detection-using-MMHS150K-Dataset",
    tags: ["CV", "NLP", "Deep Learning"]
  },
  {
    title: "Spotify Track Popularity Prediction",
    timeframe: "Nov. 2024",
    tools: "scikit-learn",
    description:
      "Applied regression and ensemble methods to predict track popularity from audio features.",
    link: "https://github.com/Janojit/Predicting-Spotify-Track-Popularity-Using-Machine-Learning-Models-",
    tags: ["ML", "Data Science"]
  },
  {
    title: "Analytics on Indian Agriculture and Economy",
    timeframe: "Nov.–Dec. 2022",
    tools: "Streamlit, Pandas",
    description:
      "Interactive dashboards to analyze crop yield, rainfall and GDP linkages; deployed using Streamlit.",
    link: "https://github.com/Janojit/Analytics-on-Indian-Agriculture-with-Economy",
    tags: ["Data Viz", "Python"]
  }
];

const timeline = [
  { role: "Summer Research Fellow", org: "IIT Ropar", period: "May 2025 -- Jul 2025", note: "Mentor: Dr. Sudarshan Iyengar" },
  { role: "Data Analytics Intern", org: "Exavalu Solutions", period: "Jan. -- Apr. 2024", note: "Analyzed Superstore dataset with Tableau" },
  { role: "Project Intern", org: "Indian Statistical Institute", period: "Jul. -- Aug. 2023", note: "WPI Compilation Project" },
  { role: "Research Intern", org: "RKM Vidyamandira", period: "Jul. -- Aug. 2022", note: "ML-based analysis in smart agriculture" }
];

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [theme, setTheme] = useState("light");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filtered = projects.filter((p) => {
    const matchesTag = tag === "All" || p.tags.includes(tag);
    const matchesQuery = (p.title + p.description + p.tools).toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={PHOTO_SRC} alt="profile" className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700" />
            <div>
              <h1 className="text-2xl font-extrabold">Janojit Chakraborty</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">M.Sc Big Data Analytics — RKMVERI | Data Scientist / ML Engineer</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Kolkata / Howrah, India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:shadow">
              <FileText size={16} /> <span className="text-sm">Download CV</span>
            </a>

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a href="https://github.com/Janojit" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
              <Github size={18} />
            </a>
          </div>
        </header>

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: About + Skills */}
          <section className="space-y-6 lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">I build data-driven systems and ML models with a focus on Natural Language Processing and practical deployment. My recent work includes a speech completion prediction system (real-time semantic completion meter) and multimodal hate-speech detection models.</p>

              <div className="mt-4 text-sm">
                <div><strong>Email:</strong> <a className="underline" href="mailto:janojitchakraborty8303@gmail.com">janojitchakraborty8303@gmail.com</a></div>
                <div className="mt-1"><strong>Phone:</strong> +91 96745 68772</div>
                <div className="mt-1"><strong>Languages:</strong> Bengali (Native), English, Hindi, French (Basic)</div>
              </div>

              <div className="mt-4 flex gap-2">
                <a href="https://github.com/Janojit" className="flex items-center gap-2 px-3 py-2 border rounded-md" target="_blank" rel="noreferrer"><Github size={14}/> GitHub</a>
                <a href="https://janojit.github.io/" className="flex items-center gap-2 px-3 py-2 border rounded-md" target="_blank" rel="noreferrer">Portfolio</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div><strong>Languages</strong><div className="text-sm text-gray-600 dark:text-gray-300">Python, R, SQL, LaTeX</div></div>
                <div><strong>Frameworks</strong><div className="text-sm text-gray-600 dark:text-gray-300">PyTorch, scikit-learn, Streamlit, Spark</div></div>
                <div><strong>Databases</strong><div className="text-sm text-gray-600 dark:text-gray-300">MySQL, MongoDB, Neo4j</div></div>
                <div><strong>Tools</strong><div className="text-sm text-gray-600 dark:text-gray-300">Git, Tableau, Excel</div></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold">Volunteering</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li><strong>Member, Organising Committee</strong> — Perceptron 2025 (RKMVERI)</li>
                <li>Student Volunteer — IACIDS 2023 (CHRIST University)</li>
                <li>Member, Student Council — CHRIST University (2023--2024)</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="mt-2 text-sm">
                <div><strong>M.Sc.</strong> Big Data Analytics — RKMVERI (2024 -- Present)</div>
                <div className="mt-1"><strong>B.Sc.</strong> Data Science — CHRIST University (2021 -- 2024), CGPA: 3.67/4</div>
              </div>
            </motion.div>
          </section>

          {/* Right column: Projects + Timeline */}
          <section className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Projects</h2>
                <div className="flex items-center gap-2">
                  <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search projects..." className="px-3 py-2 rounded-md border focus:outline-none" />
                  <select value={tag} onChange={(e)=>setTag(e.target.value)} className="px-3 py-2 rounded-md border">
                    {tags.map(t=> <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((p) => (
                  <motion.article key={p.title} whileHover={{ y: -6 }} className="p-4 rounded-xl border bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{p.timeframe} • {p.tools}</div>
                      </div>
                      <div className="flex gap-2">
                        <a href={p.link} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"><ExternalLink size={16} /></a>
                        <button onClick={() => setSelected(p)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">Details</button>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>

                    <div className="mt-3 flex gap-2 flex-wrap text-xs">
                      {p.tags.map(t=> <span key={t} className="px-2 py-1 border rounded-full">{t}</span>)}
                    </div>
                  </motion.article>
                ))}
              </div>

              {filtered.length === 0 && <div className="mt-4 text-sm text-gray-600">No projects match your query.</div>}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold">Experience & Timeline</h2>
              <ol className="mt-4 space-y-4">
                {timeline.map((t, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <div className="text-sm font-semibold">{t.role} — {t.org}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">{t.period}</div>
                      <div className="text-sm mt-1">{t.note}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold">Get in touch</h2>
              <p className="mt-2 text-sm">Interested in collaborating or hiring? Send a quick message and I will reply.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <a href="mailto:janojitchakraborty8303@gmail.com?subject=Portfolio%20Contact" className="px-4 py-3 rounded-md border inline-flex items-center gap-2"><Mail size={16}/> Email</a>
                <a href="https://github.com/Janojit" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-md border inline-flex items-center gap-2"><Github size={16}/> GitHub</a>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">Made with ❤️ · Available for internships & research collaborations · Updated Aug 12, 2025</footer>
      </div>

      {/* Modal for project details */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300">{selected.timeframe} • {selected.tools}</div>
              </div>
              <div className="flex gap-2">
                <a href={selected.link} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-md inline-flex items-center gap-2">View Repo <ExternalLink size={14}/></a>
                <button onClick={()=>setSelected(null)} className="px-3 py-2 rounded-md border">Close</button>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed">{selected.description}</p>

            <div className="mt-4 text-sm"><strong>Tags:</strong> {selected.tags.join(", ")}</div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
