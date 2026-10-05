import { useState } from "react";
import menuData from "../../data/MenuData/menuData";
import useFilterHook from "../../hooks/useFilterHook";
import ItemForm from "./form";
import Modal from "../Modal";
import styles from "./menu.module.css";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState(menuData);

  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const {
    search,
    setSearch,
    filteredData,
  } = useFilterHook(
    menuItems,
    ["item", "id", "category", "price"]
  );

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const displayedItems = filteredData.filter(
    (item) =>
      selectedCategory === "All" ||
      item.category === selectedCategory
  );

  const toggleAvailability = (id) => {
    setMenuItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              available: !item.available,
            }
          : item
      )
    );
  };


  const handleAdd = () => {
    setEditingItem(null);
    setShowModal(true);
  };

  
  const handleEdit = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  
  const handleSubmit = (formData) => {
    if (editingItem) {
     
      setMenuItems((items) =>
        items.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                ...formData,
              }
            : item
        )
      );
    } else {
    
      const newItem = {
        id: `M${String(menuItems.length + 1).padStart(3, "0")}`,
        ...formData,
      };

      setMenuItems((items) => [...items, newItem]);
    }

    setShowModal(false);
    setEditingItem(null);
  };

  return (
    <div className={styles.main}>

     
      <div className={styles.header}>
        <div className={styles.heading}>
          Made to be loved.

          <div className={styles.heading1}>
            Your menu, thoughtfully organised and always up to date.
          </div>
        </div>

        <button
          className="button"
          onClick={handleAdd}
        >
          + Add Item
        </button>
      </div>

      
      <div className={styles.nav}>

        <div className={styles.categoryNav}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={
                selectedCategory === category
                  ? styles.activeCategory
                  : ""
              }
            >
              {category}
            </button>
          ))}
        </div>

        <input
          className="search"
          type="text"
          placeholder="Find a dish.."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      
      <div className={styles.cardGrid}>

        {displayedItems.map((item) => (

          <div
            className={styles.card}
            key={item.id}
          >

            <div className={styles.imageBox}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.item}
                />
              ) : (
                <span>No image</span>
              )}
            </div>

            <div className={styles.cardContent}>

              <div className={styles.category}>
                {item.category}
              </div>

              <div className={styles.itemName}>
                {item.item}
              </div>

              <div className={styles.cardBottom}>

                <div className={styles.price}>
                  ₹{item.price}
                </div>

                <button
                  className={styles.edit}
                  onClick={() =>
                    handleEdit(item)
                  }
                >
                  Edit
                </button>

              </div>

              <hr className={styles.line} />

              
              <div>
                <button
                  className={
                    item.available
                      ? styles.available
                      : styles.unavailable
                  }
                  onClick={() =>
                    toggleAvailability(item.id)
                  }
                >
                  {item.available
                    ? "Available"
                    : "Unavailable"}
                </button>
              </div>

            </div>

          </div>

        ))}

      </div>

     
      {showModal && (
        <Modal
          title={
            editingItem
              ? "Customize Deliciously"
              : "Add something delicious."
          }
          onClose={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        >

          <ItemForm
            item={editingItem}
            onSubmit={handleSubmit}
            onClose={() => {
              setShowModal(false);
              setEditingItem(null);
            }}
          />

        </Modal>
      )}

    </div>
  );
}