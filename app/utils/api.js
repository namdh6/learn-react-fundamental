import axios from 'axios';

const params = '';



const getProfile = username => axios.get('https://api.github.com/users/' + username + params)
    .then(user => user.data);

const getRepos = username => axios.get('https://api.github.com/users/' + username + '/repos');// + params + '&per_page=100');

const getStarCount = repos => repos.data.reduce((count, repo) => count + repo.stargazers_count, 0)

const calculateScore = (profile, repos) => (profile.followers * 3) + getStarCount(repos);

const handleError = error => {
    console.warn(error);
    return null;
}

const getUserData = player => axios.all(
    [
        getProfile(player),
        getRepos(player)
    ])
    .then(data => (
        {
            profile: data[0],
            score: calculateScore(data[0], data[1])
        }
    ));

const sortPlayers = players => players.sort((a,b) => b.score - a.score);

export const fetchPopularRepos = language => {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
    return axios.get(encodedURI)
        .then(response => response.data.items);

}

export const battle = players => axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
