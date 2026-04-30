export interface GithubUser {
    login: string;
    name: string;
    bio: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    company: string | null;
    blog: string;
}
