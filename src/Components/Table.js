import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.new_case - b.new_case;
    });

    setSortProduct(res);

    console.log({ res });
  };

  const onSortClick2 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.new_case - a.new_case;
    });

    setSortProduct(res);

    console.log({ res });
  };

  const onSortClick3 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case - a.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };

  const onSortClick4 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case - a.total_case;
    });

    setSortProduct(res);

    console.log({ res });
  };

  const onSortClick5 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.new_death - b.new_death;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick6 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.new_death - a.new_death;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick7 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_death - b.total_death;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick8 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.total_death - b.total_death;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick9 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.new_case_excludeabroad - a.new_case_excludeabroad;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick10 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.new_case_excludeabroad - a.new_case_excludeabroad;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick11 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case_excludeabroad - a.total_case_excludeabroad;
    });

    setSortProduct(res);
    console.log({ res });
  };

  const onSortClick12 = () => {
    console.log("click");
    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.total_case_excludeabroad - a.total_case_excludeabroad;
    });

    setSortProduct(res);
    console.log({ res });
  };
  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.Province.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-dark table-striped shadow">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">province</th>

            <th scope="col" style={{ width: "400px" }}>
              New_case{" "}
              <span role="button" className="" onClick={onSortClick}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                🔽
              </span>
            </th>
            <th scope="col">
              Total_case
              <span role="button" className="" onClick={onSortClick3}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                🔽
              </span>
            </th>
            <th scope="col">
              New_death
              <span role="button" className="" onClick={onSortClick5}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick6}>
                🔽
              </span>
            </th>
            <th scope="col">
              Total_death
              <span role="button" className="" onClick={onSortClick7}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick8}>
                🔽
              </span>
            </th>
            <th scope="col">
              New_case_excludeabroad
              <span role="button" className="" onClick={onSortClick9}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick10}>
                🔽
              </span>
            </th>
            <th scope="col">
              Total_case_excludeabroad
              <span role="button" className="" onClick={onSortClick11}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick12}>
                🔽
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-Warning">
                <td>{index + 1}</td>
                <td>{items.province}</td>
                <td>{items.new_case}</td>
                <td>{items.total_case}</td>
                <td>{items.new_death}</td>
                <td>{items.total_death}</td>
                <td>{items.new_case_excludeabroad}</td>
                <td>{items.total_case_excludeabroad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
