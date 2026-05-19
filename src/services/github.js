// import axios from "axios";

// const username = import.meta.env.VITE_GITHUB_USERNAME;
// const token = import.meta.env.VITE_GITHUB_TOKEN;

// const githubClient = axios.create({
//   baseURL: "https://api.github.com",
//   headers: token
//     ? {
//         Authorization: `Bearer ${token}`,
//       }
//     : {},
// });

// export async function fetchGithubProfile() {
//   if (!username) {
//     throw new Error("Missing VITE_GITHUB_USERNAME. Add it to your environment variables.");
//   }

//   const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
//     githubClient.get(`/users/${username}`),
//     githubClient.get(`/users/${username}/repos`, {
//       params: {
//         sort: "updated",
//         per_page: 100,
//       },
//     }),
//     githubClient.get(`/users/${username}/events/public`, {
//       params: { per_page: 30 },
//     }),
//   ]);

//   const repositories = reposResponse.data;
//   const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
//   const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);
//   const topRepositories = [...repositories]
//     .sort((first, second) => {
//       const firstScore = first.stargazers_count * 3 + first.forks_count;
//       const secondScore = second.stargazers_count * 3 + second.forks_count;
//       return secondScore - firstScore;
//     })
//     .slice(0, 6);

//   return {
//     profile: profileResponse.data,
//     stats: {
//       repositories: profileResponse.data.public_repos,
//       followers: profileResponse.data.followers,
//       following: profileResponse.data.following,
//       stars: totalStars,
//       forks: totalForks,
//       recentEvents: eventsResponse.data.length,
//     },
//     topRepositories,
//   };
// }

