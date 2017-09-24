import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCwimxfHXdIf-VlF_9zbtrYC3TTE7nbMmQ';

const App = () =>{
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('.container'));