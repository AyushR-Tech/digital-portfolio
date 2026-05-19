// import { motion } from "framer-motion";
// import { FiGitBranch, FiStar } from "react-icons/fi";

// function GithubRepoCard({ repo }) {
//   return (
//     <motion.a
//       href={repo.html_url}
//       target="_blank"
//       rel="noreferrer"
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       whileHover={{ y: -6 }}
//       className="glass-panel block rounded-[1.75rem] p-5 shadow-soft transition"
//     >
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">
//             {repo.name}
//           </h3>
//           <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">
//             {repo.description || "Well-structured repository showcasing applied engineering work."}
//           </p>
//         </div>
//         {repo.language ? (
//           <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 light:bg-blue-50 light:text-blue-700">
//             {repo.language}
//           </span>
//         ) : null}
//       </div>

//       <div className="mt-5 flex items-center gap-5 text-sm text-slate-300 light:text-slate-700">
//         <span className="inline-flex items-center gap-2">
//           <FiStar size={15} />
//           {repo.stargazers_count}
//         </span>
//         <span className="inline-flex items-center gap-2">
//           <FiGitBranch size={15} />
//           {repo.forks_count}
//         </span>
//       </div>
//     </motion.a>
//   );
// }

// export default GithubRepoCard;
