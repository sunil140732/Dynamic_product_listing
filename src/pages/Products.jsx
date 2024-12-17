import React from 'react'
import { Product } from '../data/product'
import { useLocation,useNavigate } from 'react-router-dom'

const Products = () => {
    const location=useLocation()
    const navigate=useNavigate()

    const queryparams=new URLSearchParams(location.search) // these helps in distructuring the queryparams
    // extract the parameters
    const category=queryparams.get("category")
    const sort=queryparams.get("sort")

    // filtering the products
    const filteredProducts=Product.filter((product)=>category?product.category===category:true)
    // console.log(filteredProducts)

    // sorting the products
    if(sort==='asc'){
        filteredProducts.sort((a,b)=>a.price-b.price)
    }else if(sort==='des'){
        filteredProducts.sort((a,b)=>b.price-a.price)
    }

    function HandleFilter(key,value){
        if(value){
            queryparams.set(key,value)
        }else{
            queryparams.delete(key)
        }
        navigate(`?${queryparams.toString()}`)
    }

  return (
    <div className='container mt-5' >
      <h1 className='text-center mb-4' >Shop The Best Summer Deals</h1>

      {/* category filter section start */}
      <div className='mb-4'>
        <h3 className='text-center' >Filter by category</h3>
        {/* button start */}
        <div className="btn-group d-flex justify-content-center" role="group">
            <button type="button" onClick={()=>HandleFilter("category","men's clothing")} class="btn btn-primary">men's clothing</button>
            <button type="button" onClick={()=>HandleFilter("category","women's clothing")} class="btn btn-warning">women's colthing</button>
            <button type="button" onClick={()=>HandleFilter("category","electronics")} class="btn btn-danger">electronics</button>
            <button type="button" onClick={()=>HandleFilter("category","jewelery")} class="btn btn-info">jewelery</button>
            <button type="button" onClick={()=>HandleFilter("category","")} class="btn btn-success">All Products</button>
        </div>
        {/* button end */}
      </div>
      {/* category filter section end */}

      {/* sorting button start */}
      <div class='mb-4'>
        <h3 className='text-center' >Sort by Price</h3>
        <div className="btn-group d-flex justify-content-center" role="group" >
            <button type="button" onClick={()=>HandleFilter("sort","asc")} class="btn btn-danger">Low to High</button>
            <button type="button" onClick={()=>HandleFilter("sort","des")} class="btn btn-success">High to Low</button>
        </div>
      </div>
      {/* sorting button end */}

      {/* products start */}
      <div className='row'>
        {
            filteredProducts.length>0?(
              filteredProducts.map((product)=>(
                <div key={product.id} className='col-sm-12 col-md-6 col-lg-4 mb-4'>
                  <div className='card h-100 shadow' >
                    <img src={product.image} alt={product.title} className='card-img-top img-fluid' style={{height:'250px'}} />
                    <div className='card-body d-flex flex-column'>
                      <h5 className='card-title'>{product.title}</h5>
                      <p className='card-text'><strong>Price: ${product.price}</strong></p>
                      <button className='btn btn-primary mt-auto'>Add to Cart</button>
                    </div>
                  </div>
                </div>
                
                
            ))
            ):(
              <div className='col-12'>
                <p className='text-center'>No-products Found.</p>
                </div>
        )}
      </div>
      {/* products end */}
    </div>
  )
}

export default Products
