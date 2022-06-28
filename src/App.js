import React from "react";

function Food ({name, picture}) {
  return (
    <>
      <h2>I love {name}.</h2>
      <img src={picture} />
    </>
  )
  
}
const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://englishspectrum.com/wp-content/uploads/2014/09/DSC_0734.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://i.pinimg.com/originals/3a/77/e4/3a77e41feb4a648a2e0884a31c8ba145.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'https://cdn.shopify.com/s/files/1/0111/1729/7722/articles/dolsot-bibimbap-vegetable-main-1570px.jpg?v=1542024838'
  },
  {
    name: 'Doncasu',
    image: 'https://jesswitkins.files.wordpress.com/2012/04/100_2023.jpg?w=620'
  },
  {
    name: 'Kimbap',
    image: 'https://www.ohmyfoodrecipes.com/wp-content/uploads/2019/10/gimbap-korean-sushi-rolls-stack.jpg'
  },
];

function App() {
  // return <div className="App" />;
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}
    </div>
  )
}

export default App;
