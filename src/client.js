require("dotenv").config();

import {
  createRequest,
  getRating
} from "./ethereum";


const start = () => {
  // getRating("0xD06777d9b02F677214073cC3C5338904CBa7894a")
  // .then(console.log)
  // .catch(error);
  // return;

  let urlToQuery = 'https://www.bird.money/analytics/address/0xD06777d9b02F677214073cC3C5338904CBa7894a';
  let attributeToFetch = 'bird_rating';

  console.log("Client", "creating a new request...");
  console.log("Client", attributeToFetch, urlToQuery);
  createRequest({
      urlToQuery,
      attributeToFetch
    })
    .then(restart)
    .catch(error);
};

const restart = (result) => {
  wait(process.env.TIMEOUT).then(start);
};

const wait = (milliseconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds));
};

const error = (error) => {
  console.error(error);
  restart();
};

export default start;