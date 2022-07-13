import {
BrowserRouter as Router, Link, Outlet, Route, Routes
} from "./mini-react-router";
import { useNavigate, useParams } from "./mini-react-router/hooks";


export default function App(props) {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout(props) {
  return (
    <div className="border">
      <Link to="/">首页</Link>
      <br/>
      <Link to="/product">商品</Link>

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Product() {
  return (
    <div>
      <h1>Product</h1>

      <Link to="/product/123">商品详情</Link>

      <Outlet />
    </div>
  );
}

function ProductDetail() {
  let navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{params.id}</p>
      <button onClick={() => navigate("/")}>go home</button>
    </div>
  );
}