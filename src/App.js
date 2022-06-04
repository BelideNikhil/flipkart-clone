import { ProductList, Sidebar, Navbar } from "./Components";
import "./App.css";
export default function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">
                <Sidebar />
                <ProductList />
            </div>
        </div>
    );
}
