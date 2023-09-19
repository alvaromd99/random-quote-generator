import './Autor.css'

export default function Autor({ autor, genre }) {
	return (
		<div>
			<button className='btn'>
				<div className='autor-div'>
					<p>{autor}</p>
					<p>{genre}</p>
				</div>
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					fillRule='evenodd'
					clipRule='evenodd'>
					<path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
				</svg>
			</button>
		</div>
	)
}
