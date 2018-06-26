import React from 'react';

const Scroll=(props)=>
{
	return (
<div style={{overflowY:'scroll' , border:'5px solid rgb(0,100,255)', height:'600px'}}>
	{props.children}
</div>);
}
export default Scroll;