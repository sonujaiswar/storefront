"use client";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import ArticleListCart from "./ArticleListCart";
import ArticleSummary from "./ArticleSummary";
import { useTranslations } from "next-intl";

export default function ArticleItemCart() {
  const t = useTranslations("cartPage");
  // Calculate order summary

  // const totalPrice = totalArticleInCart.reduce((acc, item) => {
  //   const quantity = Number(item.CartQuantity ?? 1);
  //   const price = Number(item.product_price ?? 0);
  //   return acc + price * quantity;
  // }, 0);

  // const totalGST = totalArticleInCart.reduce((acc, item) => {
  //   const quantity = Number(item.CartQuantity ?? 1);
  //   const price = Number(item.product_price ?? 0);
  //   const { gstAmount } = calculateGSTAmount(price);
  //   return acc + gstAmount * quantity;
  // }, 0);
  const totalPrice = 0;
  const totalGST = 0;
  const finalTotal = totalPrice + totalGST;

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h6" component={"h6"} gutterBottom>
            {t("itemsincart")} (0)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" component={"h6"} gutterBottom>
            {t("cartordersummary")}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <ArticleSummary
            currencyCode={"$"}
            finalTotal={finalTotal}
            totalGST={totalGST}
            totalPrice={totalPrice}
          />
        </Grid>
      </Grid>
    </>
  );
}
