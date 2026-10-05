import orderData from "../../data/OrdersData/ordersData";
import inventoryData from "../../data/InventoryData/inventoryData";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const totalOrders = orderData.length;

  const todaysRevenue = orderData
    .filter((order) => order.status !== "Cancelled")
    .reduce((total, order) => total + order.total, 0);

  const averageOrderValue =
    totalOrders > 0
      ? Math.round(todaysRevenue / totalOrders)
      : 0;

  const activeOrders = orderData.filter(
    (order) =>
      order.status !== "Completed" &&
      order.status !== "Cancelled"
  ).length;

  const statuses = [
    "Received",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Completed",
    "Cancelled",
  ];
  
  const lowStockItems = inventoryData.filter(
    (item) => item.currentStock <= item.reorderLevel
  );

 

  const recentOrders = orderData.slice(-8).reverse();

  return (
    <div className={styles.main}>

     

      <div className={styles.heading}>
        Good morning, Kitchen.

        <div className={styles.heading1}>
          Here&apos;s what&apos;s happening in your restaurant today.
        </div>
      </div>


      

      <div className={styles.kpiGrid}>

        <div className={styles.kpiCard}>
          <span>Today&apos;s Revenue</span>
          <h2>₹{todaysRevenue.toLocaleString()}</h2>
          <p>Total revenue from active orders</p>
        </div>

        <div className={styles.kpiCard}>
          <span>Total Orders</span>
          <h2>{totalOrders}</h2>
          <p>Orders received today</p>
        </div>

        <div className={styles.kpiCard}>
          <span>Average Order Value</span>
          <h2>₹{averageOrderValue}</h2>
          <p>Average value per order</p>
        </div>

        <div className={styles.kpiCard}>
          <span>Active Orders</span>
          <h2>{activeOrders}</h2>
          <p>Orders currently in progress</p>
        </div>

      </div>


     

      <div className={styles.middleGrid}>

       

        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <h2>Order Status</h2>
            <span>Today</span>
          </div>

          <div className={styles.statusList}>

            {statuses.map((status) => {

              const count = orderData.filter(
                (order) => order.status === status
              ).length;

              return (
                <div
                  className={styles.statusRow}
                  key={status}
                >
                  <span>{status}</span>

                  <strong>{count}</strong>
                </div>
              );
            })}

          </div>

        </div>


        

        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <h2>Low Stock</h2>
            <span>{lowStockItems.length} items</span>
          </div>

          {lowStockItems.length > 0 ? (

            <div className={styles.stockList}>

              {lowStockItems.map((item) => (

                <div
                  className={styles.stockRow}
                  key={item.id}
                >

                  <div>
                    <strong>{item.ingredient}</strong>

                    <p>
                      {item.currentStock} {item.unit}
                    </p>
                  </div>

                  <span>
                    Reorder at {item.reorderLevel} {item.unit}
                  </span>

                </div>

              ))}

            </div>

          ) : (

            <div className={styles.noStock}>
              Everything is well stocked.
            </div>

          )}

        </div>

      </div>


     
      <div className={styles.card}>

        <div className={styles.cardHeader}>
          <h2>Recent Orders</h2>
          <span>Latest 8 orders</span>
        </div>

        <div className={styles.tableWrapper}>

          <table>

            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              {recentOrders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.customer}</td>

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

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}