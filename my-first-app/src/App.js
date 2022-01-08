import logo from './pics/Building1.jpeg';
import image2 from './pics/image2.jpeg';
import image3 from './pics/image3.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      <div class="banner">
          <h1>Business and Industrial Parks</h1>
      </div>

      <img src={logo} className="logo" alt="logo" />
        
      <div class="con5">
                 <img src={image2} class="image2" />

        <div class="column" >
            <h5 class="text">We have several business and industrial parks with available space for your business</h5>

        </div>
    </div>
        
    <div>
        <div class="foot">

          <div>
            <p class="font1">Construction Machinery Co.</p>
          </div>

            
            <p class="font2">We has a proud tradition of service as a General Contractor since 1974</p>
            <p class="font3">We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget.  Our company has served clients and building owners for over four decades.</p>
        
        </div>
        <div class="column" >
            <img src={image3} class="image3" />
        </div>
    </div>    
        
        
        

      </header>
    </div>
  );
}

export default App;
