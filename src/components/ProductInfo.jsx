import thumb01 from "../images/product1/image-product-1-thumbnail.jpg";
import thumb02 from "../images/product1/image-product-2-thumbnail.jpg";
import thumb03 from "../images/product1/image-product-3-thumbnail.jpg";
import thumb04 from "../images/product1/image-product-4-thumbnail.jpg";
import full01 from "../images/product1/image-product-1.jpg";
import full02 from "../images/product1/image-product-2.jpg";
import full03 from "../images/product1/image-product-3.jpg";
import full04 from "../images/product1/image-product-4.jpg";

import thumb11 from "../images/product2/1thumb.jpg";
import thumb12 from "../images/product2/2thumb.jpg";
import thumb13 from "../images/product2/3thumb.jpg";
import thumb14 from "../images/product2/4thumb.jpg";
import full11 from "../images/product2/1.jpg";
import full12 from "../images/product2/2.jpg";
import full13 from "../images/product2/3.jpg";
import full14 from "../images/product2/4.jpg";

import thumb21 from "../images/product3/1thumb.jpg";
import thumb22 from "../images/product3/2thumb.jpg";
import thumb23 from "../images/product3/3thumb.jpg";
import thumb24 from "../images/product3/4thumb.jpg";
import full21 from "../images/product3/1.jpg";
import full22 from "../images/product3/2.jpg";
import full23 from "../images/product3/3.jpg";
import full24 from "../images/product3/4.jpg";

import thumb31 from "../images/product4/1thumb.jpg";
import thumb32 from "../images/product4/2thumb.jpg";
import thumb33 from "../images/product4/3thumb.jpg";
import thumb34 from "../images/product4/4thumb.jpg";
import full31 from "../images/product4/1.jpg";
import full32 from "../images/product4/2.jpg";
import full33 from "../images/product4/3.jpg";
import full34 from "../images/product4/4.jpg";

import thumb41 from "../images/product5/1thumb.jpg";
import thumb42 from "../images/product5/2thumb.jpg";
import thumb43 from "../images/product5/3thumb.jpg";
import thumb44 from "../images/product5/4thumb.jpg";
import full41 from "../images/product5/1.jpg";
import full42 from "../images/product5/2.jpg";
import full43 from "../images/product5/3.jpg";
import full44 from "../images/product5/4.jpg";

const ProductInfo = [
  {
    id: 0,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.`,
    images: {
      thumbnailSize: [thumb01, thumb02, thumb03, thumb04],
      fullSize: [full01, full02, full03, full04],
    },
    sizes: [7, 8, 9, 10, 11],
    price: 250,
    discountPercent: 50,
  },
  {
    id: 1,
    company: "Sneaker Company-1",
    title: "Fall Limited Edition Sneakers-1",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.-1`,
    images: {
      thumbnailSize: [thumb11, thumb12, thumb13, thumb14],
      fullSize: [full11, full12, full13, full14],
    },
    sizes: [6, 7, 8, 9, 10],
    price: 280,
    discountPercent: 25,
  },
  {
    id: 2,
    company: "Sneaker Company-2",
    title: "Fall Limited Edition Sneakers-2",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.-2`,
    images: {
      thumbnailSize: [thumb21, thumb22, thumb23, thumb24],
      fullSize: [full21, full22, full23, full24],
    },
    sizes: [7, 8, 9, 10],
    price: 240,
    discountPercent: 45,
  },
  {
    id: 3,
    company: "Sneaker Company-3",
    title: "Fall Limited Edition Sneakers-3",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.-3`,
    images: {
      thumbnailSize: [thumb31, thumb32, thumb33, thumb34],
      fullSize: [full31, full32, full33, full34],
    },
    sizes: [8, 9, 10, 11],
    price: 310,
    discountPercent: 30,
  },
  {
    id: 4,
    company: "Sneaker Company-4",
    title: "Fall Limited Edition Sneakers-4",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.-4`,
    images: {
      thumbnailSize: [thumb41, thumb42, thumb43, thumb44],
      fullSize: [full41, full42, full43, full44],
    },
    sizes: [7, 8, 9, 10, 11],
    price: 270,
    discountPercent: 25,
  },
];
export default ProductInfo;
