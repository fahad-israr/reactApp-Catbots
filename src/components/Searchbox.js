import React from 'react';





const Searchbox=({searchfield,searchchange})=>
	{

		return(
			<div className='pa2'>
			<input className='bg-light-blue br3 ma2 pa2 grow dib bw2 shadow-5' 
			type="search" placeholder="Search For Cats"
			onChange={searchchange} />

</div>
			);
	}

export default Searchbox;