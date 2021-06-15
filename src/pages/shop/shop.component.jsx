import { useState } from "react";

import "./shop.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data.js";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview {...otherCollectionProps} key={id} />
      ))}
    </div>
  );
};

export default ShopPage;
