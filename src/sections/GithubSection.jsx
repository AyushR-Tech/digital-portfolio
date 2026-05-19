// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import GithubRepoCard from "../components/GithubRepoCard";
// import SectionHeading from "../components/SectionHeading";
// import { fetchGithubProfile } from "../services/github";

// function GithubSection({ data }) {
//   const [state, setState] = useState({
//     loading: true,
//     error: "",
//     payload: null,
//   });

//   useEffect(() => {
//     let active = true;

//     async function loadGithubData() {
//       try {
//         const payload = await fetchGithubProfile();
//         if (!active) {
//           return;
//         }

//         setState({
//           loading: false,
//           error: "",
//           payload,
//         });
//       } catch (error) {
//         if (!active) {
//           return;
//         }

//         setState({
//           loading: false,
//           error: error.message || "Unable to load GitHub data.",
//           payload: null,
//         });
//       }
//     }

//     loadGithubData();
//     return () => {
//       active = false;
//     };
//   }, []);

//   const stats = state.payload?.stats;

//   return (
//     <section id="github" className="section-spacing">
//       <div className="container-shell">
//         <SectionHeading
//           eyebrow="GitHub"
//           title={data.github.title}
//           description={data.github.description}
//         />

//         {state.loading ? (
//           <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
//             <div className="glass-panel h-72 animate-pulse rounded-[2rem]" />
//             <div className="grid gap-6 md:grid-cols-2">
//               {Array.from({ length: 4 }).map((_, index) => (
//                 <div key={index} className="glass-panel h-40 animate-pulse rounded-[1.75rem]" />
//               ))}
//             </div>
//           </div>
//         ) : null}

//         {state.error ? (
//           <div className="glass-panel rounded-[2rem] p-8 text-center">
//             <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">
//               GitHub data is not configured yet
//             </h3>
//             <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 light:text-slate-700">
//               {state.error} Create a `.env` file using `.env.example`, set `VITE_GITHUB_USERNAME`,
//               and optionally add `VITE_GITHUB_TOKEN` if you want higher API limits.
//             </p>
//           </div>
//         ) : null}

//         {state.payload ? (
//           <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               className="glass-panel rounded-[2rem] p-8 shadow-soft"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={state.payload.profile.avatar_url}
//                   alt={state.payload.profile.name}
//                   className="h-20 w-20 rounded-3xl border border-white/10 object-cover"
//                   loading="lazy"
//                 />
//                 <div>
//                   <h3 className="font-display text-3xl font-bold text-white light:text-slate-950">
//                     {state.payload.profile.name || state.payload.profile.login}
//                   </h3>
//                   <p className="text-sm text-slate-400 light:text-slate-600">
//                     @{state.payload.profile.login}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-300 light:text-slate-700">
//                 {state.payload.profile.bio ||
//                   "Public GitHub profile connected to showcase repositories, stars, forks, and recent coding activity."}
//               </p>

//               <div className="mt-8 grid grid-cols-2 gap-4">
//                 {[
//                   { label: "Repositories", value: stats.repositories },
//                   { label: "Stars", value: stats.stars },
//                   { label: "Forks", value: stats.forks },
//                   { label: "Recent Events", value: stats.recentEvents },
//                 ].map((item) => (
//                   <div key={item.label} className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
//                     <p className="text-2xl font-bold text-white light:text-slate-950">{item.value}</p>
//                     <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-400">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <div>
//               <div className="mb-6 flex items-center justify-between">
//                 <h3 className="font-display text-2xl font-bold text-white light:text-slate-950">
//                   Top Repositories
//                 </h3>
//                 <a
//                   href={state.payload.profile.html_url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400/50 hover:text-blue-200 light:border-slate-300 light:text-slate-700"
//                 >
//                   View Profile
//                 </a>
//               </div>

//               <div className="grid gap-5 md:grid-cols-2">
//                 {state.payload.topRepositories.map((repo) => (
//                   <GithubRepoCard key={repo.id} repo={repo} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </section>
//   );
// }

// export default GithubSection;
