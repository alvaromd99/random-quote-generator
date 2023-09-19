import './Quote.css'

export default function Quote({ text }) {
	return <div className='quote-cont'>{`"${text}"`}</div>
}
