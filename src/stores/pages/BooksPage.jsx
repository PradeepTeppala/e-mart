import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const BooksPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
        
          const companyHandler = (mango) => {
            if (selectedProduct.includes(mango)) {
              setSelectedProduct(selectedProduct.filter((item) => item !== mango));
            } else {
              setSelectedProduct([...selectedProduct, mango]);
            }
            console.log(selectedProduct);
          };
        
           const filteredProduct = selectedProduct.length === 0?
           booksData : booksData.filter((orange)=> selectedProduct.includes(orange.author));
        
  return (
    <>
    <Navbar/>
    <div className="fullpage">
        <div className="pro-selected">
            {booksData.map((book) => {
            return (
                <div key={book.id}>
                <label>
                    <input className="pro-input"
                    type="checkbox"
                    checked={selectedProduct.includes(book.author)}
                    onChange={() => companyHandler(book.author)}
                    />
                    {book.author}
                </label>
                </div>
            );
            })}
        </div>
    
        <div className="pageSection">
            {filteredProduct.map((item) => {
            return (
                <div key={item.id}>
                <Link to={`/Book/${item.id}`}>
                    <div className="pageImg">
                    <img src={item.image} alt="" />
                    </div>
                </Link>
                <div className="proModel">
                    {item.title} 
                </div>
                </div>
            );
            })}
        </div>
    </div>
    </>
  )
}

export default BooksPage
