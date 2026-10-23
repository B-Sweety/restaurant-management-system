import inventoryData from "../../data/InventoryData/inventoryData";
import useFilterHook from "../../hooks/useFilterHook";
import { useState } from "react";
import styles from "./styles.module.css";



export default function Inventory() {
  
 const {
  search,
  setSearch,
  filteredData,
} = useFilterHook(inventoryData,
  ["ingredient", "id", "unit", "status"]);

  const trackedIngredient = inventoryData.length;
  const inStockCount = inventoryData.filter(

  (item) => item.currentStock > 5
).length;

const lowStockCount = inventoryData.filter(
  (item) => item.currentStock <= 0
).length; 


  

  const handleTopup = () =>{
    alert("Top-Up the Stock");
  }



  return (
    <div className={styles.main}>

      <div className={styles.header}
      >
        <div className={styles.heading}>
        A well-stocked kitchen.

      

      <div className={styles.heading1}>
        Keep the essentials ready, before the rush arrives.
      </div>
      </div>
      <button className= "button" onClick={handleTopup}>
        Export Goods.
      </button>
      </div>

      <div className={styles.cards}> 
        <div className={styles.tracked}>
            <div className={styles.track}>Tracked Ingredient</div>
            <div className={styles.total}>{trackedIngredient}</div>
            <div className={styles.trackdesc}>Across the kitchen and pantry</div>
        </div>
        <div className={styles.tracked} >
            <div className={styles.track}>
                Running Low
            </div>
            <div className={styles.total}>
                {inStockCount}
            </div >
            <div className={styles.trackdesc} >Time to plan for top-up</div>
        </div>
         <div className={styles.tracked} >
            <div className={styles.track}>
                Out of stock
            </div>
            <div className={styles.total}>
                {lowStockCount}
            </div>
            <div className={styles.trackdesc} >Replenish  before service</div>
        </div>
        
        </div>

      

      <div className={styles.searchBox}>
        <input
          className= "search"
          type="text"
          placeholder="Search Ingredients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.inventoryTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ingredient</th>
              
              <th>Current Stock</th>
              <th>Reorder Level</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td><div className={styles.ingredient}>{item.ingredient}</div></td>
                
                <td>
  <div className={styles.stockContainer}>
     <div className={styles.stockValue}>
      {item.currentStock} {item.unit}
    </div>

    <div className={styles.stockLine}>
      <div
        className={`${styles.stockFill} ${
          item.currentStock > 5
            ? styles.stockHigh
            : styles.stockLow
        }`}
        style={{
          width: `${Math.min((item.currentStock / 15) * 100, 100)}%`,
        }}
      ></div>
    </div>
  </div>
</td>
                <td>{item.reorderLevel} {item.unit}</td>
                <td><div className={`${styles.status} ${
                  item.status === "Low Stock"
                  ? styles.lowStatus
                  : styles.inStatus
                }`}
                >
                   ·{item.status === "Low Stock" ? "Low" : "In"}

                  </div></td>
                <td>
                    <div className={styles.top_up}>
                        <button onClick={handleTopup}>Top-Up</button>

                    </div>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
      

    </div>
  );
}