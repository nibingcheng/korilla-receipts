import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const receipt1 = {
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22
    },
    paid: false
  };
  const receipt2 = {
    person: "Jerrica",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  };
  const receipt3 = {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: false
  };

  const receipts = [receipt1, receipt2, receipt3];

ReactDOM.render(<App receipts={receipts}/>, document.getElementById('root'));
