import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/card'
import Counter from './components/Counter'
import Footer from './components/footer'

function App() {
	return (
		<div className='App'>
			<Header />
			<Counter />

			<div className='container'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<h1>Hello World</h1>
			<button>click</button>
			<Footer />
		</div>
	)
}

export default App
