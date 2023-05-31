import {useEffect, useState} from 'react';

function UseEffectHookDemo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
//   useEffect for initial rendering only
  useEffect(() => {
    console.log('Initial Rendering'); //mounting phase(componentDidMount)
  },[]);

//useEffect with dependency array and cleanup function - //update phase(componentDidUpdate)
  useEffect(() => {
    console.log('Dependency array-' + count); 
    return  ()=> {
      console.log('cleanup function-'+ count) //unmounting phase(componentWillUnmount)
    };
  },[count]);

//   on every rendering update phase(componentDidUpdate)
  useEffect(() => {
    console.log('On every Render');
  });

  return (
    <>
      {count}
        <button onClick={()=>setCount(count+1)}>click me</button>
        <button onClick={()=>setCount1(count1+1)}>click me</button>
      {count1}
    </>
  );
}

export default UseEffectHookDemo;
