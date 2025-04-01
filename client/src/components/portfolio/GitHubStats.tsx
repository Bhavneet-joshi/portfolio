import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Code, Calendar } from "lucide-react";

interface GitHubStatsProps {
  username: string;
}

interface GitHubUserData {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  contributions?: number;
}

interface GitHubRepoData {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
}

interface GitHubEventData {
  type: string;
  id: string;
  [key: string]: any;
}

export function GitHubStats({ username }: GitHubStatsProps) {
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [repos, setRepos] = useState<GitHubRepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const reposData = await reposResponse.json();

        // Fetch contribution events (commits, pull requests, issues)
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch GitHub events');
        }
        const eventsData = await eventsResponse.json();
        
        // Count contributions - simplistic approach based on available public events
        const contributionEvents = eventsData.filter((event: GitHubEventData) => 
          event.type === 'PushEvent' || 
          event.type === 'PullRequestEvent' || 
          event.type === 'IssuesEvent' ||
          event.type === 'IssueCommentEvent'
        );
        
        // Create enhanced user data with contributions count
        const enhancedUserData = {
          ...userData,
          contributions: contributionEvents.length
        };

        setUserData(enhancedUserData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading GitHub data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p className="font-medium">Error loading GitHub data</p>
          <p className="text-sm">{error}</p>
        </div>
        <p className="mt-4 text-gray-600">Please try again later or check the username.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-md overflow-hidden">
        <CardHeader className="bg-gray-50">
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            <span>GitHub Profile Stats</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {userData && (
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 rounded-md p-4 text-center">
                <div className="flex flex-col items-center">
                  <Code className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-gray-500">Repositories</span>
                  <span className="text-2xl font-bold">{userData.public_repos}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-md p-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="h-6 w-6 text-yellow-500 mb-2" />
                  <span className="text-sm text-gray-500">Followers</span>
                  <span className="text-2xl font-bold">{userData.followers}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-md p-4 text-center">
                <div className="flex flex-col items-center">
                  <GitFork className="h-6 w-6 text-blue-500 mb-2" />
                  <span className="text-sm text-gray-500">Following</span>
                  <span className="text-2xl font-bold">{userData.following}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-md p-4 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="h-6 w-6 text-green-500 mb-2" />
                  <span className="text-sm text-gray-500">Member since</span>
                  <span className="text-lg font-medium">{formatDate(userData.created_at)}</span>
                </div>
              </div>
              
              {userData.contributions !== undefined && (
                <div className="md:col-span-4 bg-primary/10 rounded-md p-4 mt-2">
                  <div className="flex items-center justify-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    <div>
                      <span className="text-2xl font-bold">{userData.contributions}</span>
                      <span className="text-sm text-gray-600 ml-2">Recent Contributions</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <h3 className="text-lg font-medium mb-4">Repository List ({repos.length})</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {repos.map((repo) => (
              <div key={repo.name} className="border border-gray-200 rounded-md p-3 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    {repo.homepage && (
                      <a 
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-primary"
                      >
                        {repo.homepage}
                      </a>
                    )}
                  </div>
                  <div className="flex space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-3 w-3 mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}