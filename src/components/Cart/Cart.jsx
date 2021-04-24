import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyle from "./style";
import CartItem from "./CartItem/CartsItem";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveCart,
  handleEmptyCart,
}) => {
  const classes = useStyle();

  const EmptyCard = () => (
    <Typography variant="subtitle1">
      <Link t0="/" className={classes.link}>
        Ayo Mulai Belanja
      </Link>
      Kamu tidak memiliki barang di dalam Cart
    </Typography>
  );

  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveCart={handleRemoveCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "...loading";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Chart
      </Typography>
      {!cart.line_items.length ? <EmptyCard /> : <FilledCard />}
    </Container>
  );
};

export default Cart;
