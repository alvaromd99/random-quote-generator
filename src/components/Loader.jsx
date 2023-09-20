import '../styles/Loader.css'
import Footer from './Footer'

export default function Loader() {
	return (
		<div className='loader-div'>
			<span className='loader'></span>
			<div className='foot'>
				<Footer />
			</div>
		</div>
	)
}
