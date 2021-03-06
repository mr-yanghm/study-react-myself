import React, { Component, useContext } from "react";

function petchItems() {
  return [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];
}

const SearchBar = () => {
  const state = useContext(DefaultContext);
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={state.handleFilterText}
      />
      <p>
        <input type="checkbox" id="chkbox" onChange={state.handleInStockOnly} />{" "}
        <label htmlFor="chkbox">Only show products in stock</label>
      </p>
    </form>
  )
};

const ProductTable = ({ products }) => {
  const state = useContext(DefaultContext);

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(state.filterText) === -1) {
      return;
    }

    if (state.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const DefaultContext = React.createContext({
  filterText: "",
  inStockOnly: false,
});

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
      handleFilterText: this.handleFilterText,
      handleInStockOnly: this.handleInStockOnly
    };
  }

  handleFilterText = (e) => {
    this.setState({ filterText: e.target.value });
  };

  handleInStockOnly = (e) => {
    this.setState({ inStockOnly: e.target.checked });
  };

  render() {
    const products = petchItems();
    return (
      <DefaultContext.Provider value={this.state}>
        <div>
          <SearchBar
          />
          <ProductTable
            products={products}
          ></ProductTable>
        </div>
      </DefaultContext.Provider>
    );
  }
}

export default ShoppingList;
