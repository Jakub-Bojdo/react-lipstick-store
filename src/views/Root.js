import React, { useState, useEffect } from "react";
import MainTemplate from "../templates/MainTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Lipsticks from "./Lipsticks";
import About from "./About";
import { routes } from "../routes";
import RootContext from "../context/context";
import roseLipsImage from "../assets/images/rose-lips.jpg";
import greenLipsImage from "../assets/images/green-lips.png";
import oceanLipsImage from "../assets/images/ocean-lips.png";
import orangeLipsImage from "../assets/images/orange-lips.png";
import violetLipsImage from "../assets/images/violet-lips.png";

const Root = () => {
  const lipsticksImages = {
    rose: roseLipsImage,
    violet: violetLipsImage,
    green: greenLipsImage,
    ocean: oceanLipsImage,
    orange: orangeLipsImage,
  };
  const { rose, violet, green, ocean, orange } = lipsticksImages;

  const lipsticksNames = ["rose", "violet", "green", "ocean", "orange"];

  const productsArray = [
    {
      name: lipsticksNames[0],
      image: lipsticksImages.rose,
      quantity: 1,
      price: 25,
    },

    {
      name: lipsticksNames[1],
      image: lipsticksImages.violet,
      quantity: 1,
      price: 25,
    },

    {
      name: lipsticksNames[2],
      image: lipsticksImages.green,
      quantity: 1,
      price: 25,
    },

    {
      name: lipsticksNames[3],
      image: lipsticksImages.ocean,
      quantity: 1,
      price: 25,
    },

    {
      name: lipsticksNames[4],
      image: lipsticksImages.orange,
      quantity: 1,
      price: 25,
    },
  ];

  const [
    roseLipstick,
    violetLipstick,
    greenLipstick,
    oceanLipstick,
    orangeLipstick,
  ] = productsArray;

  const addProductToCart = (type) => {
    switch (type) {
      case "rose":
        setShoppingCart([...shoppingCart, roseLipstick]);
        break;
      case "violet":
        setShoppingCart([...shoppingCart, violetLipstick]);
        break;
      case "green":
        setShoppingCart([...shoppingCart, greenLipstick]);
        break;
      case "ocean":
        setShoppingCart([...shoppingCart, oceanLipstick]);
        break;
      case "orange":
        setShoppingCart([...shoppingCart, orangeLipstick]);
        break;
      default:
        return shoppingCart;
    }

    handleDuplicateTypeOfProduct(type);

    // console.log(handleDuplicateProductType(type));
    // const filteredCart = shoppingCart.filter(item => type === item.name);
    // console.log(filteredCart);
    // setShoppingCart([...filteredCart]);
  };

  const removeProductFromCart = (type) => {
    const filteredShoppingCart = shoppingCart.filter(
      (item) => item.name !== type
    );

    const deletedProduct = shoppingCart.find((item) => item.name === type);

    setCartCounter(cartCounter - deletedProduct.quantity);

    setShoppingCart(filteredShoppingCart);
  };

  //TODO: POPRAWIC NAZWY
  const handleDuplicateTypeOfProduct = (type) => {
    const isADuplicate = shoppingCart.some((item) => type === item.name);
    // console.log(isADuplicate);
    if (isADuplicate === true) {
      const copyOfShoppingCart = shoppingCart;

      copyOfShoppingCart.forEach((item) => {
        // let q = item.quantity;
        // console.log(q);
        console.log(type);
        console.log(item.name);
        if (item.name === type) {
          item.quantity = item.quantity + 1;
          item.price = item.price + 25;
        } else {
          console.log("different names");
        }
      });
      console.log(copyOfShoppingCart);
      setShoppingCart(copyOfShoppingCart);
      handleCalculateCartTotal();
    }
  };
  // let subTotal = 0;
  // let cartItems = 0;
  // cart.forEach(item => {
  //   subTotal += item.total;
  //   cartItems += item.count;
  // });
  // useEffect(() => {}, [shoppingCart]);
  const [productImage, setProductImage] = useState(rose);
  const [productName, setProductName] = useState(lipsticksNames[0]);
  const [cartCounter, setCartCounter] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isAlertMessageVisible, setAlertMessageVisible] = useState(false);
  const [isAlertCartVisible, setAlertCartVisible] = useState(false);
  const [isPaymentAlertVisible, setPaymentAlertVisibility] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [isPaymentInputVisible, setPaymentInputVisiblity] = useState(false);
  const [pathname, setPathname] = useState(routes.home);
  console.log(shoppingCart);

  useEffect(() => {
    handleCalculateCartTotal();
  }, [shoppingCart]);

  const handleCalculateCartTotal = () => {
    let total = 0;

    shoppingCart.forEach((item) => {
      total = total + item.price;
    });

    setCartTotal(total);

    console.log(total);
    console.log(cartTotal);
  };

  const handlePathnameChange = (type) => {
    const { home, lipsticks, about } = routes;
    switch (type) {
      case home:
        setPathname(home);
        break;
      case about:
        setPathname(about);
        break;
      case lipsticks:
        setPathname(lipsticks);
        break;
      default:
        setPathname(home);
    }
  };

  const handleAlertVisibility = (alertType) => {
    switch (alertType) {
      case "message":
        setAlertMessageVisible(!isAlertMessageVisible);
        //hide alert
        setTimeout(() => {
          setAlertMessageVisible(false);
        }, 1200);

        break;
      case "cart":
        setAlertCartVisible(!isAlertCartVisible);
        //hide alert
        setTimeout(() => {
          setAlertCartVisible(false);
        }, 1200);
        break;
      case "payment":
        setPaymentAlertVisibility(!isPaymentAlertVisible);
        setShoppingCart([]);
        setCartOpen(false);
        setCartCounter(0);
        setPaymentInputVisiblity(false);
        //hide alert
        setTimeout(() => {
          setPaymentAlertVisibility(false);
        }, 1200);
        break;
      default:
        return "";
    }
  };
  const handleCartCounterIncrese = () => {
    setCartCounter(cartCounter + 1);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  const handleProductColorChange = (type) => {
    switch (type) {
      case "violet":
        setProductImage(violet);
        setProductName(lipsticksNames[1]);
        break;
      case "green":
        setProductImage(green);
        setProductName(lipsticksNames[2]);
        break;
      case "ocean":
        setProductImage(ocean);
        setProductName(lipsticksNames[3]);
        break;
      case "orange":
        setProductImage(orange);
        setProductName(lipsticksNames[4]);
        break;
      default:
        setProductImage(rose);
        setProductName(lipsticksNames[0]);
    }
  };

  const handlePaymentInputVisibility = () => {
    setPaymentInputVisiblity(!isPaymentInputVisible);
  };
  return (
    <Router>
      <RootContext.Provider
        value={{
          productImage,
          productName,
          handleProductColorChange,
          cartCounter,
          handleCartCounterIncrese,
          isAlertMessageVisible,
          isAlertCartVisible,
          handleAlertVisibility,
          shoppingCart,
          addProductToCart,
          isCartOpen,
          handleCartClose,
          handleCartOpen,
          removeProductFromCart,
          cartTotal,
          isPaymentInputVisible,
          handlePaymentInputVisibility,
          isPaymentAlertVisible,
          pathname,
          handlePathnameChange,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.lipsticks} component={Lipsticks} />
          </Switch>
        </MainTemplate>
      </RootContext.Provider>
    </Router>
  );
};

export default Root;
