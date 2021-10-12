# THE **`MEME`** STUDIO 🚀

We live in a **`Meme`** 🔥 world, THE **`MEME`** STUDIO is one place where you can scroll thorough plenty of **`Memes`** and create your **`Meme`** with just few clicks ☝️.

Once you find a **`Meme`** worthy enough you can either share it or like 👍 the **`Meme`**.

## Live Link

https://thememestudio-db48d.web.app/

## Table of content


<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#">About the Project</a>
      <ul>
        <li><a href="https://github.com/Sakshamkapur/lambda-be">Backend Repo</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#performance">Performance</a>
      <ul>
        <li><a href="#bundle-size">Bundle Size</a></li>
       <li><a href="#lighthouse-score-for-home-page">Light House Score for Home Page</a></li>
       <li><a href="#lighthouse-score-for-studio-page">Light House Score for Studio Page</a></li>
      </ul>
    </li>
    <li><a href="#code-practices-followed">Coding Practices</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## Installation

#### NPM

First installs required packages and start the server at **localhost:3000**

```bash
npm install
```

```bash
npm start
```

#### Yarn

First installs required packages and start the server at **localhost:3000**

```bash
yarn install
```

```bash
yarn start
```


## Performance

#### Bundle Size
![image](https://user-images.githubusercontent.com/29700196/133791697-774ccf46-70a7-412c-9ef2-b7e01b40c868.png)

#### LightHouse Score for Home Page
![image](https://user-images.githubusercontent.com/29700196/133817756-a8b82570-fc5a-486b-b12a-c033bf73fed7.png)

#### LightHouse Score for Studio Page
![image](https://user-images.githubusercontent.com/29700196/133817662-6de67ef3-e561-4c0d-b55c-5cd161a47379.png)


* 🔥 Virtualized Listing of Memes (**masionic**)
* 🔥 Debounced Memes Searching
* 🔥 Page and Redux level code splitting (**redux-dynamic-modules**)

## Code Practices Followed

* 🔥 Linting (**prettier** with **Airbnb rules**)

To run linter just type this in terminal, it will show any linting issues in _.js,.jsx,.ts,.tsx_ files.

```bash
npm run lint
```

If you find any minor linting issues try run this to fix them.

```bash
npm run lint:fix
```

* 🔥 TypeScript

## Testing

We have use jest along with testing-library to unit test. Run the following command to run the tests.

```bash
npm run test
```

To view the Coverage of the Test Cases. Run this.

```bash
npm run test -- --coverage
```
The current coverage is **72%** and WIP. You can have detailed view here

[Code Coverage Report.pdf](https://github.com/Sakshamkapur/lambda-fe/files/7190291/Code.coverage.report.for.All.files.pdf)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
