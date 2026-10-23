import { useState } from "react";
import { useRouter } from "next/router";
import orderData from "../../data/OrdersData/ordersData";
import useFilterHook from "../../hooks/useFilterHook";
import styles from "./styles.module.css";

export default function Orders() {
  const router = useRouter();

  const [selectedStatus, setSelectedStatus] = useState("All");

  
  const {
    search,
    setSearch,
    filteredData,
  } = useFilterHook(orderData, [
    "id",
    "customer",
    "type",
    "status",
  ]);

  const statuses = [
    "All",
    "Received",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Completed",
    "Cancelled",
  ];

 
  const displayedOrders = filteredData.filter(
    (order) =>
      selectedStatus === "All" ||
      order.status === selectedStatus
  );

  return (
    <div className={styles.main}>

    
      <div className={styles.header}>
        <div className={styles.heading}>
          Every order, in order.

          <div className={styles.heading1}>
            From the first ticket to the final plate.
          </div>
        </div>

        {/* <button className="button">
          Export Goods
        </button> */}
      </div>

    
      <div className={styles.nav}>

        <div className={styles.statusNav}>
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={
                selectedStatus === status
                  ? styles.activeStatus
                  : ""
              }
            >
              {status}
            </button>
          ))}
        </div>

        <input
          className="search"
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

     
      <div className={styles.order_table}>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Type</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {displayedOrders.length > 0 ? (
              displayedOrders.map((order) => (
                <tr
                  key={order.id}
                  className={styles.orderRow}
                  onClick={() =>
                    router.push(`/orders/${order.id}`)
                  }
                >
                  <td>{order.id}</td>

                  <td>{order.customer}</td>

                  <td>
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                    ))}
                  </td>

                  <td>{order.type}</td>

                  <td>
                    <span
                      className={`${styles.status} ${
                        styles[
                          order.status
                            .toLowerCase()
                            .replaceAll(" ", "")
                      ]
                    }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>₹{order.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                  }}
                >
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}