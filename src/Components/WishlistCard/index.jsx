import React from 'react'
// import { removeFromWishlist } from '../../Redux/Features/productSlice'
// import { useDispatch } from 'react-redux'

const WishlistCard = ({name,description,product}) => {
    // const dispatch=useDispatch()
  return (
    <div >
      <div id="card">
        <div className="card_title">
          <h3>{name}</h3>
        </div>
        <div className="card_info">
          <p>{description}</p>
        </div>
        <div>
          {/* <button
            className="btn btn-dark my-2" onClick={()=>dispatch(removeFromWishlist({id:id}))}>
            remove
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default WishlistCard
