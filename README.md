# Oğuz Ölke - Hepsiburada React Challenge

<a href="https://eloquent-hypatia-4f41ba.netlify.app/?page=1&color=&brand=&sort=&search=" target="_blank">Live Demo</a>
<br>
<a href="https://quiet-thicket-51521.herokuapp.com/products" target="_blank">Backend Demo</a>
<br/>
<a href="https://github.com/patika-hepsiburada-react-bootcamp/hb-challenge-backend-olkeoguz" target="_blank">Github repository of the backend</a>

<hr/>

## Libraries used in this project

- react-router-dom is used for storing the filter queries in the url in order to maintain the filters when the page refreshes.

- react-image-gallery is used for the image carousel.
<hr/>

## Tests

To run all the tests in this project,

```bash
npm run test:coverage
```

Overall coverage: `75.67`
<br/>
Test Suites : `17`
<br/>
Tests: `36`

<hr/>

## Docker

```bash
docker build -t oguz.olke/hb-react .
```

Then

```bash
docker run -p 3001:3000 -d oguz.olke/hb-react
```

---

## In order to run this project in your local environment

 <br/>

```bash
git clone https://github.com/patika-hepsiburada-react-bootcamp/hb-react-challenge-olkeoguz.git
```

And then

```bash
npm install
```

to install all the dependencies.

Finally,

```bash
npm start
```

to start the development mode.
