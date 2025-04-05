import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Code, Calendar, ExternalLink, GitBranch, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  description: string | null;
  language: string | null;
  topics: string[];
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
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
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
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading GitHub data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 p-8">
            <div className="bg-destructive/10 p-4 rounded-full">
              <Github className="h-8 w-8 text-destructive" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-destructive mb-2">Error loading GitHub data</h3>
              <p className="text-muted-foreground">{error}</p>
            </div>
            <p className="text-sm text-muted-foreground">Please try again later or check the username.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span>Profile Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {userData && (
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Repositories</span>
                  <span className="text-3xl font-bold">{userData.public_repos}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500/10 p-3 rounded-full mb-4">
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Followers</span>
                  <span className="text-3xl font-bold">{userData.followers}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-blue-500/10 p-3 rounded-full mb-4">
                    <GitFork className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Following</span>
                  <span className="text-3xl font-bold">{userData.following}</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-green-500/10 p-3 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Member since</span>
                  <span className="text-lg font-medium">{formatDate(userData.created_at)}</span>
                </div>
              </motion.div>
            </div>
          )}

          {userData?.contributions !== undefined && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold block">{userData.contributions}</span>
                  <span className="text-sm text-muted-foreground">Recent Contributions</span>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Repositories */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <span>Recent Repositories</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group bg-card rounded-lg p-4 border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium truncate">
                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {repo.name}
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h4>
                    </div>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 items-center">
                      {repo.language && (
                        <span className="inline-flex items-center text-xs text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary mr-1"></span>
                          {repo.language}
                        </span>
                      )}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span key={topic} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                    {repo.homepage && repo.homepage.trim() !== '' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        asChild
                      >
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Globe className="h-3 w-3" />
                          <span>Live Preview</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}