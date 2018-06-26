
import React from 'react';
import Card from './Card';


const Cardlist=({cats})=>{
	
return(
<div className="tc ma2 ">{cats.map((c,i)=><Card key={i} name={cats[i].name} />)}</div>
);
}
export default Cardlist;