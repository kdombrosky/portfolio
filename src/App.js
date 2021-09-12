import React, {useState} from 'react';

// import components
import Nav from './components/Nav/';
import Footer from './components/Footer/';

// About Me, Portfolio, Contact, and Resume, 
// and the title corresponding to the current section is highlighted
function App() {
  // Nav categories
  const[categories] = useState([
    {name: 'ABOUT'}, 
    {name: 'PORTFOLIO'}, 
    {name: 'CONTACT'}, 
    {name: 'RESUME'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Nav 
        categories={categories} 
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
      />

      <Footer />
    </div>
  );
}

export default App;
