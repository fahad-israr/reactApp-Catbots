import React from 'react';


class Card extends React.Component{

	render()
	{
		
		return(


			
			
			<div className='tc bg-light-blue dib br3 ma2 pa2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${this.props.name}?set=set4`} alt='cat robo'/>
			<div>
			<h2>{this.props.name} </h2>
			<h4> cat.robo{this.props.name} @robomail.com</h4>
			</div>


			</div>
            


           



			);
	}
}
export default Card;