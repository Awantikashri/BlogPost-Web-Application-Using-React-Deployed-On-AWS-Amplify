import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.product.code}</td>
    <td>{props.product.name}</td>
    <td>{props.product.category}</td>
    <td>{props.product.quantity}</td>
    <td>Rs. {props.product.price}</td>
    <td>Rs. {props.product.price*props.product.quantity}</td>
    <td>
    <div className="mb-3">
        <span>
            <i className="fas fa-edit"></i>
        </span>
        <Link to={"/edit/"+props.product._id}>Edit</Link> |
        |
        <span>
            <i className="fas fa-trash"></i>
        </span>
            <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>Delete</a>
    </div>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
    this.orderProduct = this.orderProduct.bind(this);
    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  orderProduct(id) {
    axios.post('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct}  key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div className="Product-List">
        <h3>Published Blogs</h3>
        <div className="Table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th><h2>Feel The Magic of Autumn in Sissu, Spiti's Best kept Secret</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i>By Divyangna (Nomadic_Missy)</i></td>
            </tr>
            <tr>
            <img src="photo2.jpg" width="500px"></img>
            </tr>
            <tr>
                <td>
                <b>"Autumn shows us how beautiful it is to let things go. Coz LIFE starts all over again when it gets crisp in the fall."</b>

I have never experienced Autumn season in full fledged mode while being in city for these years. This year thought to experience it in Spiti. With Atal Tunnel in Rohtang coming in, connectivity has increased many folds and it has become super easy to reach Lahaul And Spiti. If you start from Manali it takes around 30-40 minutes to cross tunnel and here you are in totally different geographical condition directly in Lahaul & Spiti.

October is when Spiti is beautifully covered with Autumn vibes. With Summer fading into Autumn, witnessed the beautiful colours that this season brings. Also, on a road trip you can truely get lost into the stunning views while driving in Lahaul and Spiti.
                <p><b>Drive to Sissu Village Via Atal Tunnel:</b>

Best way to explore this side is hire a rental car or bike. We took a cab and started from Manali. Its around 33km drive to reach the North End of the tunnel which lands you in Spiti Valley. The moment you come out of tunnel its a beautiful landscape and all together different geographical condition.

You can stop by road side and breathe in cool breeze. Amazing experience it is. Road is well maintained and perfect choice for a road trip. Sissu Village is around 6 km from Tunnel's North End and first village on that way.</p>
                </td>

            </tr>
            
          </tbody>
        </table>
        </div>
        <div className="Table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th><h2>Rafting at 11,000 ft & Meeting the Shepherdess of the Glaciers: Here's How I Spent My Time in Ladakh</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i>By Ila Reddy</i></td>
            </tr>
            <tr>
            <img src="photo1.jpg" width="500px"></img>
            </tr>
            <tr>
             <td>
             You know you’re on a trip of a lifetime when you touchdown on an airstrip surrounded by snow-capped mountains on all sides!

Located in the western Himalayas (and the subject of much dispute between India, Pakistan, and China since 1947), Ladakh is home to breathtaking river valleys, high mountain slopes, unique flora and fauna, old Buddhist monasteries, and myriad nomadic tribes. It is arguably one of the most beautiful (and sparsely populated) destinations in India and has been at the crossroads of important trade routes in the past. Its name is derived from La-dwags (ལ་དྭགས) which means “land of high passes” in Tibetan and Ladakhi, and is fondly referred to as “Little Tibet.”

A popular destination for high-altitude trekking, climbing, and biking expeditions, as well as monastery-hopping and a few cultural festivals, a conventional 10-day itinerary typically covers Kargil, Leh, Khardung-La, Diskit, Hemis, Nubra valley, Pangong Tso, Thiksey, and Tso Moriri.

While I had around the same time at hand, I decided to experience Ladakh a bit differently and gave most of these places a miss.

Instead, I volunteered at an alternate education school near Leh, enjoyed white-water rafting at 11,000 feet, spent time with nomadic tribes in their makeshift homes in the mountains, learned how to harvest peas, and met the shepherds of the glaciers in one of Ladakh’s earliest settlements!
              </td>

          </tr>
          </tbody>
        </table>
        </div>
        <div className="Table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th><h2>The Most Comprehensive Guide to Your Tawang (Arunachal Pradesh) trip</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i>By Shibaji G</i></td>
            </tr>
            <tr>
            <img src="photo3.jpg" width="500px"></img>
            </tr>
            <tr>
            <td>
              Arunachal Pradesh, India's very own 'land of the rising sun' is unique, serene, virgin, and SPECIAL. I believe it is one of the most beautiful places in the World, and undoubtedly in India.
              <li>This is my video travelogue on Tawang: https://youtu.be/X3FJ-nEWrc8</li>
              <li>For a video based Trip Planner, you can see: https://youtu.be/JgySi2HqUc8</li>

              Because I intend to provide you all that I can, this post can run a bit long. Go through it. I believe it will not disappoint.The official website of Arunachal Pradesh tourism : www.arunachaltourism.com .

              <p><b>ILP and other necessary information:</b>Navigate to the above website and obtain all the necessary information that you need. Not only does it inform you about the Tawang circuit, here you will be informed about other amazing places in Arunachal as well, which I am yet to visit... :) You can apply for the Innerline Permit (ILP) here with valid documents. It usually takes some days to a few weeks to get processed, in most cases.
Non-Indians need to apply for Protected Area Permit (PAP) following a similar procedure.</p></td>

</tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}