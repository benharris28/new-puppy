import React from 'react';
import ChecklistCard from '../../Components/ChecklistCard/ChecklistCard';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import ApiContext from '../../ApiContext';
import ProductApiService from '../../services/product-api-service'

class ProductList extends React.Component {
    
    static contextType = ApiContext;

    state = {
        complete: 'false',
        displayProducts: []
    }

    // Add patch to database

    componentDidMount = () => {
        // GET all products from the database and add them to state
        // Change activeProducts to state
        ProductApiService.getAllProducts()
            .then(res => {
                console.log(res)
                this.setProducts(res)

                })

    }

    setProducts = (res) => {
        this.setState({
            displayProducts: res
        })
    }
    

    handleComplete = (page) => {
        this.setState({
            complete: true
        })
        this.context.handleProgress(page)
        this.context.handleProductCounter(1)

        // create item in user service to patch
    }

    renderIcon = () => {
        const { complete } = this.state;
        if (complete === true) {
            return  (
                <FontAwesomeIcon 
                className="square-icon-checked" 
                icon={faCheckSquare}
                                    
                /> 
            )
        } else {
            return (
                <FontAwesomeIcon 
                            className="square-icon-non-hover" 
                            icon={faSquare}
                                                
                        />
            )
        }
    }
    
    render() {
        console.log(this.state)
        const counter = Object.values(this.state).filter(Boolean).length
        console.log(counter)
        const { products } = this.context;
        const activeProducts = products.filter(product => product.active === true)
        const pageName = 'productPage'
        const { displayProducts } = this.state;
        
        return (
            
            <div className="tabs-content">
                <div className="tabs-intro">
                    <h5>Get the gear</h5>
                    <p>Fake Name, founder of Fake Pet Trainers, has listed out the following items as absolutely essential when bring home a new puppy!</p>
                </div>
                                
                <div className="checklist-card-container">
                    {displayProducts.map(product => 
                                    <ChecklistCard 
                                        key={product.category}
                                        image={product.image} 
                                        category={product.category}
                                        brand={product.brand}
                                        price={product.price}
                                        description={product.description_text}
                                        purchaseText={product.purchase_text}
                                        purchaes_link={product.canada_link}
                                        handleComplete={this.handleComplete}
                                         />)}  
                            
                                  
                                   
                </div>
                <div className="next-checkpoint-box">
                    <div className="checkmark-box">
                        <div className="help-text">
                            Mark done
                        </div>
                        <div 
                            onClick={() => this.handleComplete(pageName)}>
                            {this.renderIcon()}
                            
                        </div>
                    </div>
                        
                        <Link to="/checklist">
                            <button className="guide-button">
                                Back to checklist
                            </button>
                        </Link>
                </div>
            </div>
        )
        


    }
    
}

export default ProductList;