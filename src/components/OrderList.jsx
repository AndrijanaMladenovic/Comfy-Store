import React from "react";
import { useLoaderData } from "react-router";

function OrderList() {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders :{meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Product</th>
              <th>Cost</th>
              <th className="hidden sm:block">Data</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td>{Date(createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
