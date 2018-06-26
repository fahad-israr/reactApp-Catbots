import React from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll'
import Searchbox from '../components/Searchbox';
import './App.css'
class App extends React.Component
{
	constructor()
	{
		super();
		this.state={cats:[],searchfield:''}
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})


	}



componentDidMount()
{
	fetch('https://jsonplaceholder.typicode.com/users').then(data=> data.json()).then(users=>{this.setState({cats:users})
})

	

}
	
	


	render()
	{
		//const {cats,searchfield}=this.state ----called destrucuring and when using it u wont need to use this.state again & again !!

		const filtCats=this.state.cats.filter(cats=>cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
		
if(this.state.cats.length===0){return <div className='tc ut'><h1 className='f1 tc bg-light-blue dib br3 ma2 pa2 grow bw2 shadow-5 ct'>Loading....</h1></div>}
else{

		return(
			<div className="tc ">
<h1 className='f1 bg-light-blue dib br3 ma2 pa2 grow bw2 shadow-5'>Cat Bots</h1>
<Searchbox searchchange={this.onSearchChange}/>
			<Scroll><Cardlist cats={filtCats} /></Scroll>

</div>
			);
	}
	}
}
export default App;