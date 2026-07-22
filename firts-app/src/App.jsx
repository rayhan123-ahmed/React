import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    <>
      <NavBar />
      <div className="cards">
        <Card title = 'card 1' description = 'card is showing now' />
        <Card title = 'card 2' description = 'card is showing now' />
        <Card title = 'card 3' description = 'card is showing now' />
      </div>
      <Footer />
    </>
  )
}

export default App
