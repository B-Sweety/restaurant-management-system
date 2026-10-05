import { useState } from "react";
import styles from "./form.module.css";

export default function ItemForm({ item, onSubmit, onClose }) {

  const [formData, setFormData] = useState({
    item: item?.item || "",
    category: item?.category || "",
    price: item?.price || "",
    available: item?.available ?? true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <label>Item Name</label>

      <input
        name="item"
        value={formData.item}
        onChange={handleChange}
        placeholder="Enter item name"
      />

      <label>Category</label>

      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter category"
      />

      <label>Price</label>

      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Enter price"
      />

     <label>Image</label>

      {item?.image && (
        <div className={styles.imagePreview}>
          <img
            src={item.image}
            alt={item.item}
          />
        </div>
      )}
      <label className={styles.checkbox}>
        <input
          name="available"
          type="checkbox"
          checked={formData.available}
          onChange={handleChange}
        />
        Available
      </label>

      <div className={styles.buttons}>

        <button type="button" onClick={onClose}>
          Cancel
        </button>

        <button type="submit">
          {item ? "Save Changes" : "Add Item"}
        </button>

      </div>

    </form>
  );
}