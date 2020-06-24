# Top Rated Todo List
Website developed via React.js.

## Instruction

### Set up in local
* Run `git clone https://github.com/TT0-GIT/top-rated-movie-list.git` in command line.
* `cd top-rated-movie-list` and start contributing.
* Run `npm start` in command line, then open http://localhost:3000 in browser to view website locally

### Collaboration rules
* Don't commit code into `master` branch directly
* Feature development
  * Create your own feature branch from head of `develop`, using `git checkout -b your-name/issue-description origin/develop`
  * Once your code is ready, commit and push code to remote
    * `git add . -A && git commit -m "description of your commit"`
    * `git push origin head`
  * Go to github create Pull request and ask teammates for review
* Merge PR
  * Require at least 1 approval from teammates before merge
  * Only allows Squash-and-Merge via github UI
  * Once your PR is merged, feature branch in remote will be deleted automatically

### Demo App and CD pipeline
Website is deployed to Heroku. Any commits to `master/develop` branches will automatically trigger new deployments.
* `master` branch is deployed to [top-rated-movie-list-prod](https://dashboard.heroku.com/apps)
* `develop` branch is deployed to [top-rated-movie-list-staging](https://dashboard.heroku.com/apps)
