import React from 'react';
import RandomCat from './RandomCat';
import '../CatList.css';



class CatList extends React.Component {
  render() {

    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li className="cats-elements"> <RandomCat width="200" height="200"/></li>
          <li className="cats-elements"> <RandomCat width="200" height="400"/></li>
          <li className="cats-elements"> <RandomCat /></li>
        </ul>
      </section>
    );
  }
}

export default CatList; 