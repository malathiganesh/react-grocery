import './menu.css';
import Menulist from './menulist';
import fruits from '../images/fruite.jpg';
import veg from '../images/veg.jpg';
import grocery from '../images/grocery.png';
import snack from '../images/snack.jpg'; 

function Menus(){
    const menus=[
        {
            id:1,
            name:'Fruits',
            images:fruits
        },
        {
            id:2,
            name:'Vegtables',
            images:veg
        },
        {
            id:3,
            name:"Grocery's",
            images:grocery
        },
        {
            id:4,
            name:'Snackes',
            images:snack
        }
    ];
    return(
        <div className='menus'>
        <div className='mcontainer'>
        {/* <h2>Explore your Joy</h2> */}
        <div className='mWrapper'>
      
                          {
                                      menus.map((items)=>{
                              return <Menulist key={items.id} image={items.images} name={items.name}></Menulist>
                          })
                          }
                      
                      </div>
          </div>
          </div>)

};
export default Menus;