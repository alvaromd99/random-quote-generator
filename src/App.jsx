import { useState, useEffect } from 'react'
import { fetchRandomQuote } from './hooks/useFetch.js'
import AllAuthorQuotes from './components/AllAuthorQuotes'
import Author from './components/Author'
import Quote from './components/Quote'
import Loader from './components/Loader'
import Footer from './components/Footer'
import './App.css'

function App() {
	const [quote, setQuote] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [authorActive, setAuthorActive] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetchRandomQuote().then((newQuote) => {
			setQuote(newQuote)
			setIsLoading(false)
		})
	}, [])

	const fetchQuote = () => {
		setIsLoading(true)
		fetchRandomQuote().then((newQuote) => {
			setQuote(newQuote)
			setIsLoading(false)
		})
	}

	// Endpoint to test
	// https://quote-garden.onrender.com/api/v3/quotes/?author=Aaliyah

	return (
		<>
			<button
				className='refresh'
				onClick={() => {
					if (authorActive) {
						setAuthorActive(false)
					}
					fetchQuote()
				}}>
				random
				<svg
					className='icon'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z' />
				</svg>
			</button>

			{isLoading && <Loader />}

			{!isLoading && authorActive && (
				<div className='App all-quotes'>
					<AllAuthorQuotes author={quote.quoteAuthor} />
				</div>
			)}

			{!isLoading && !authorActive && (
				<div
					className='App'
					onClick={() => {
						setAuthorActive(!authorActive)
					}}>
					<Quote quote={quote} />
					<Author quote={quote} />
					<div className='foot'>
						<Footer />
					</div>
				</div>
			)}
			{/* {isLoading ? (
				<Loader />
			) : authorActive ? (
				<div className='App all-quotes'>
					<AllAuthorQuotes author={quote.quoteAuthor} />
				</div>
			) : (
				<div
					className='App'
					onClick={() => {
						setIsLoading(true)
						setAuthorActive(!authorActive)
						setIsLoading(false)
					}}>
					<Quote quote={quote} />
					<Author quote={quote} />
					<div className='foot'>
						<Footer />
					</div>
				</div>
			)} */}
		</>
	)
}

export default App
