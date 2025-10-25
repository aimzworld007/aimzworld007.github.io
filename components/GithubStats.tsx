import React from 'react';
import { personalData } from '../constants';

// NOTE: In a real-world scenario, this data would be fetched from the GitHub API.
// For this portfolio, we are using static data to represent the user's activity.
const githubStats = {
  repos: 28,
  stars: 15,
  followers: 10,
  following: 12,
};

const StatItem: React.FC<{ icon: string; value: number; label: string }> = ({ icon, value, label }) => (
  <div className="text-center">
    <i className={`fa-solid ${icon} text-2xl text-primary mb-2`}></i>
    <p className="text-3xl font-extrabold text-light-text-dark dark:text-text-dark">{value}</p>
    <p className="text-sm text-light-text-medium dark:text-text-medium font-medium">{label}</p>
  </div>
);

const GithubStats: React.FC = () => {
  const githubUsername = personalData.github.split('/').pop();

  return (
    <div className="bg-light-card-background dark:bg-card-background p-8 rounded-xl shadow-card border border-light-border dark:border-border h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-6">
          <i className="fa-brands fa-github text-4xl text-light-text-dark dark:text-text-dark mr-4"></i>
          <div>
            <h4 className="text-xl font-bold text-light-text-dark dark:text-text-dark">@{githubUsername}</h4>
            <p className="text-sm text-light-text-medium dark:text-text-medium">Activity & Stats</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
          <StatItem icon="fa-book-bookmark" value={githubStats.repos} label="Repositories" />
          <StatItem icon="fa-star" value={githubStats.stars} label="Stars" />
          <StatItem icon="fa-user-group" value={githubStats.followers} label="Followers" />
          <StatItem icon="fa-user-plus" value={githubStats.following} label="Following" />
        </div>
      </div>

      <a
        href={personalData.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-text-dark font-bold rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg dark:shadow-glow"
      >
        View GitHub Profile
        <i className="fa-solid fa-arrow-up-right-from-square text-sm ml-3"></i>
      </a>
    </div>
  );
};

export default GithubStats;
