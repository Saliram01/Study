import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom'

export default function CreatingStudent() {
  return (
    <form>
      <h1 className="title">Product Form</h1>
      <div className="field-container">
        <div className="field">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" placeholder="Enter product id"/>
        </div>
        <div className="field">
          <label htmlFor="id">Name</label>
          <input type="text" id="id" placeholder="Enter product name"/>
        </div>
        <div className="field">
          <label htmlFor="id">Brand</label>
          <input type="text" id="id" placeholder="Enter product brand"/>
        </div>
        <div className="field">
          <label htmlFor="id">Category</label>
          <input type="text" id="id" placeholder="Enter product category"/>
        </div>
        <div className="field">
          <label htmlFor="id">Price</label>
          <input type="text" id="id" placeholder="Enter product price"/>
        </div>
        <div className="form-btn">
          <button>Submit</button>
          <Link to={'/'}><button className="icon"><TiArrowBack size={20}/></button></Link>
        </div>
      </div>
    </form>
  );
}
