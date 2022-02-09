To submit a new project, please follow those steps:

* [ ] Make sure you have a working Node.js environment with at least Node.js 14
* [ ] Fork [this repository](https://github.com/suda/call-for-maintainers)
* [ ] Clone it locally:
```
git clone git@github.com:<YOUR_NAME>/call-for-maintainers.git
```
* [ ] Install dependencies:
```
cd call-for-maintainers
npm install
```
* [ ] Run the script that fetches your repo:
```
./scripts/fetch-repo.js <OWNER>/<REPO>
```
* [ ] Run the script that generates the index:
```
./scripts/build-index.js
```
* [ ] Commit your changes
```
git add -a .
git commit -m "Added <OWNER>/<REPO>"
git push
```
* [ ] Create a pull request to this repo with your changes