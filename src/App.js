import './App.css'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Header from './Header/Header'
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Main />
      <Header />
      <Footer />
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  )
}

export default App
