import Home from '../components/Home';
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

const mapStateToProps=state => ({
    cardData: state.cardItems,
})

const mapDispatchToProps = dispatch => ({
    addToCartHander:data=> dispatch(addToCart(data))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);





// export default Home;