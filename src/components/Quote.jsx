import PropTypes from 'prop-types'
import '../styles/Quote.css'

export default function Quote({ quote }) {
	const { quoteText } = quote
	return <div className='quote-cont'>{`"${quoteText}"`}</div>
}

Quote.propTypes = {
	quote: PropTypes.shape({
		quoteText: PropTypes.string, // String is expected for quoteText
	}).isRequired, // The entire 'quote' object is required
}
