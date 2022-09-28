import { useState } from "react"

function CartItems(props) {
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)
    const [count,setCount] = useState(1)
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])

return(<><div>
    <span>
                <span>{props.offer}<span>%</span></span><br/>
                <span>offer</span>
            </span>
            <div className="dealsImage">
                <img src={props.image}></img>
            </div>

            <div>
                <h4>{props.name}</h4><span>{props.qty}</span>
                <h3>{save}</h3>
                <p>M.R.P: ₹{props.price}</p>
                <p>Save ₹{originalPrice}</p>
            </div>
    
        
                  <div><button onClick={()=>{
                     if(count==1){
                        setCount(count+1)
                    }
                        // setCount(count+1)
                        
                     }}>+</button> <p>{count}</p>
                     <button onClick={()=>{
                         if(count>1){
                             setCount(count-1)
                         }
                     }
                      
                     }>-</button>
                     </div>
              
          
          
            </div>
    </>)
};
export default CartItems;