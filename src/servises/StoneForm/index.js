import React, { useState } from "react";
import styles from './StoneForm.module.css'
import {map} from "lodash";
export default function StoneForm( ) {
  const [stones, setStones] = useState([]);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState([]);
  const [arrayName, setArrayName] = useState("");

  const handleAddImage = () => {
    setImages([...images, { link: "" }]);
  };

  const handleImageChange = (index, field, value) => {
    const updatedImages = [...images];
    // если поле это "link", то мы преобразуем значение в формат ссылки
    updatedImages[index][field] = field === 'link' ? `/pricePage/${arrayName}/${value}.png` : value;
    setImages(updatedImages);
  };

  const handleAddPrice = () => {
    setPrice([...price, { size: "", cost: "" }]);
  };

  const handlePriceChange = (index, field, value) => {
    const updatedPrice = [...price];
    updatedPrice[index][field] = value;
    setPrice(updatedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stoneData = {
      name,
      images,
      price,
    };
    setStones([...stones, stoneData]);
    // очистка формы
    setName("");
    setImages([]);
    setPrice([]);
  };

  const handleDelete = (index) => {
    setStones(stones.filter((_, stoneIndex) => stoneIndex !== index));
  };

  return (
    <div className={styles.wrapper}>
    <form className={styles.stoneForm} onSubmit={handleSubmit}>
      <div>
        <label>
          Array Name:
          <input
            type="text"
            value={arrayName}
            onChange={(e) => setArrayName(e.target.value)}
          />
        </label>
      </div>
      <div >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Images:</label>
        {map(images, (image, index) => (
          <div key={index}>
            <label>
              Link:
              <input
                type="text"
                value={image.link}
                onChange={(e) =>
                  handleImageChange(index, "link", e.target.value)
                }
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddImage}>
          Add Image
        </button>
      </div>
      <div>
        <label>Price:</label>
        {map(price, (item, index) => (
          <div key={index}>
            <label>
              Size:
              <input
                type="text"
                value={item.size}
                onChange={(e) =>
                  handlePriceChange(index, "size", e.target.value)
                }
              />
            </label>
            <label>
              Cost:
              <input
                type="text"
                value={item.cost}
                onChange={(e) =>
                  handlePriceChange(index, "cost", e.target.value)
                }
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddPrice}>
          Add Price
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
      <div className={styles.containerView}>
        {map(stones, (stone, index) => (
          <div style={{display: 'flex'}} key={index}>
            <p style={{marginRight: 30}}>{stone.name}</p>
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </div>
        ))}
      </div>
      <div className={styles.containerView}>
        <p>export const {arrayName} =</p>
        <pre>{JSON.stringify(JSON.parse(`[${map(stones, (stone) => JSON.stringify(stone)).join(",")}]`), null, 2)}</pre>
      </div>
    </div>
  );
}