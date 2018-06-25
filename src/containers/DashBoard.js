import React,{Component} from 'react';
import Modal from '../components/Modal';

class DashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal : false,
      name : '',
      products : [
        {
          id : 1,
          name : 'OnePlus',
          rate : 'Medium',
          quality : '1'
        },
        {
          id : 2,
          name : 'iPhone',
          rate : 'High',
          quality : '2'
        }
      ]
    }
  }
  componentWillMount(){
    if(window.name.length === 0){
      window.name = this.props.location.state.name;
    }
      this.setState({
        name : window.name
      })
  }
  onShowModal = () => {
    this.setState({
      showModal : true
    })
  }
  onCloseModal = () => {
    this.setState({
      showModal : false
    })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const rate = e.target.elements.rate.value;
    const quality = e.target.elements.quality.value;
    const id = this.state.products.length + 1;
    if (name && rate && quality) {
      const addProduct = {id, name, rate, quality}
      this.setState({
        products : [...this.state.products,addProduct]
      })
      this.onCloseModal();
    }
  }
  onDeleteList = (product) => {
    console.log('clicked',product.id);
    const deleteItem = this.state.products.filter((list) => list.id !== product.id)
    console.log(deleteItem);
    this.setState({
      products : deleteItem
    })
  }
  render(){
    const list = (
      this.state.products.map((product) => {
        return <li key={product.id}>
                  Name : {product.name}, Rate : {product.rate}, Quality : {product.quality}
                  <button onClick={() => this.onDeleteList(product)}>Delete</button>
               </li>
      })
    )
    return(
      <div>
        <p>Welcome {this.state.name.replace(/@.*/,'')} </p>
        <ol>{list}</ol>
        <button onClick={this.onShowModal}>Add Product</button>
        <Modal
          onShowModal = {this.state.showModal}
          onFormSubmit = {this.onFormSubmit}
          onCloseModal = {this.onCloseModal}
        />
      </div>
    );
  }
}

export default DashBoard;
