import React,{Component}from 'react';

class Navbar extends Component{
    
    render(){
        let NavbarItems = {
            Home: "Home",
            Products: ["Software","IoT"],
            AboutUs: "About Us",
        }
        return(
            <div className = "Navbar">
                <h1>Componente Navbar</h1>
                <h2>Componente Navbar items</h2>
                
                <hr/>
                <ol>
                    {
                    NavbarItems.Products.map((product, i)=>{
                        console.log(product);
                        return( 
                            <li key = {i}>
                                
                                {product}
                            </li>
                        )
                    })
                    

                     }
                </ol>

                <h3>Systems</h3>
            </div>
        );
    }
}

export default Navbar;