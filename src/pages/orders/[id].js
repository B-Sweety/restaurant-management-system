import { useRouter } from "next/router";
import orderData from "../../../data/OrdersData/ordersData";
import styles from "./orderdetails.module.css";

export default function OrderDetails() {
  const router = useRouter();

  const { id } = router.query;

  const order = orderData.find(
    (item) => item.id === id
  );

  if (!order) {
    return <div>Order not found</div>;
  }

  const timeline = [
    {
      title: "Order Received",
      description: "Order has been received successfully.",
      status: "Received",
    },
    {
      title: "Preparing",
      description: "Kitchen is preparing the order.",
      status: "Preparing",
    },
    {
      title: "Ready",
      description: "Order is ready for pickup.",
      status: "Ready",
    },
    {
      title: "Out for Delivery",
      description: "Order is on the way.",
      status: "Out for Delivery",
    },
    {
      title: "Completed",
      description: "Order has been completed.",
      status: "Completed",
    },
  ];

  const statusOrder = [
    "Received",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Completed",
  ];

  const currentIndex =
    statusOrder.indexOf(order.status);

  return (
    <div className={styles.main}>

      <button
        className={styles.back}
        onClick={() => router.push("/orders")}
      >
        ← Back to Orders
      </button>

      <div className={styles.header}>
        <div>
          <div className={styles.heading}>
            Order {order.id}
          </div>

          <div className={styles.heading1}>
            Order details and progress
          </div>
        </div>
      </div>

    
      <div className={styles.orderInfo}>

        <div>
          <span>Customer</span>
          <strong>{order.customer}</strong>
        </div>

        <div>
          <span>Order Type</span>
          <strong>{order.type}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{order.status}</strong>
        </div>

        <div>
          <span>Total</span>
          <strong>₹{order.total}</strong>
        </div>

      </div>

      
      <div className={styles.section}>

        <h2>Order Items</h2>

        {order.items.map((item, index) => (
          <div
            className={styles.item}
            key={index}
          >
            {item}
          </div>
        ))}

      </div>

      
      <div className={styles.section}>

        <h2>Order Timeline</h2>

        <div className={styles.timeline}>

          {timeline.map((step, index) => {

            const completed =
              currentIndex >= index;

            return (
              <div
                className={styles.timelineItem}
                key={step.status}
              >

                <div
                  className={
                    completed
                      ? styles.dotActive
                      : styles.dot
                  }
                ></div>

                <div>
                  <h3>{step.title}</h3>

                  <p>
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}