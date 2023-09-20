import PropTypes from 'prop-types'
import { fetchAllQuotes } from '../hooks/useFetch'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import Quote from './Quote'
import Loader from './Loader'
import '../styles/AllAuthorQuotes.css'

export default function AllAuthorQuotes({ author }) {
	console.log('Render')

	const [quotes, setQuotes] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetchAllQuotes({ author }).then((newQuotes) => {
			setIsLoading(false)
			setQuotes(newQuotes)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				quotes.length !== 0 && (
					<div>
						<h1>{quotes[0].quoteAuthor}</h1>
						<div className='wrapper'>
							{quotes.map((quote) => (
								<Quote key={quote._id} quote={quote} />
							))}
						</div>
					</div>
				)
			)}
			<Footer />

			{/* {quotes.length !== 0 && (
				<div>
					<h1>{quotes[0].quoteAuthor}</h1>
					<div className='wrapper'>
						{quotes.map((quote) => (
							<Quote key={quote._id} quote={quote} />
						))}
					</div>
				</div>
			)} */}
		</>
	)
}

AllAuthorQuotes.propTypes = {
	author: PropTypes.string,
}
