import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCwimxfHXdIf-VlF_9zbtrYC3TTE7nbMmQ';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			selectedVideo: null
		};
		YTSearch({key: API_KEY, term: 'newton'}, (videos)=>{
			this.setState({
				videos:videos,
			selectedVideo:videos[0]
		});
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos = {this.state.videos}/>
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
