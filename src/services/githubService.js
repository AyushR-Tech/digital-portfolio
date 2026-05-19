// import axios from "axios";

// const BASE_URL = "https://api.github.com";

// export async function fetchGitHubData(username) {
//   if (!username) throw new Error("GitHub username must be set in VITE_GITHUB_USERNAME");

//   const token = import.meta.env.VITE_GITHUB_TOKEN;
//   const headers = token ? { Authorization: `token ${token}` } : {};

//   const [userRes, repoRes] = await Promise.all([
//     axios.get(`${BASE_URL}/users/${username}`, { headers }),
//     axios.get(`${BASE_URL}/users/${username}/repos`, {
//       headers,
//       params: { per_page: 100, sort: "updated" }
//     })
//   ]);

//   const repos = repoRes.data
//     .filter((repo) => !repo.fork && !repo.private)
//     .sort((a, b) => b.stargazers_count - a.stargazers_count)
//     .slice(0, 6);

//   return {
//     profile: userRes.data,
//     repos
//   };
// }
