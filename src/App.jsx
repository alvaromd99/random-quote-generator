import './App.css'
import Autor from './components/Autor'
import Quote from './components/Quote'

const textEx =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'

const autorEx = 'pepe juan'

const genreEx = 'business'

function App() {
	return (
		<div className='App'>
			<Quote text={textEx} />
			<Autor autor={autorEx} genre={genreEx} />
		</div>
	)
}

export default App
