import newyork from './img/newyork.jpeg'
import paris from './img/paris.jpeg'
import london from './img/london.jpeg'
import tokyo from './img/tokyo.jpeg'
// Se quisermos adicionar as imagens da pasta 'public' não precisa importar, pode fazer
// normalmente como em HTML.


export const tourData = [
  {
    id: 1,
    city: "new york",
    img: newyork,
    name: "new york bridge tour",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
  },
  {
    id: 2,
    city: "paris",
    img: paris,
    name: "paris lights tour",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
  },
  {
    id: 3,
    city: "london",
    img: london,
    name: "london royal palace tour",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
  },
  {
    id: 4,
    city: "tokyo",
    img: tokyo,
    name: "tokyo sushi tour",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
  }
];
