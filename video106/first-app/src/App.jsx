
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (

    <>
      <Navbar />
      <main>This is the main content of my site</main>
      <Card  title="Card 1" description="card 2 desc"/>
      <Card  title="Card 1" description="card 2 desc"/>
      <Card  title="Card 1" description="card 2 desc"/>
      <Card   title="Card 1" description="card 2 desc"/>
      <Footer />
    </>
  )
}
export default App