"use client";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { RootState } from "@/types/stateTypes";
import NoArticle from "@/components/ui/cart/NoArticle";
import ArticleItemCart from "@/components/ui/cart/ArticleItemCart";
export default function Cart() {
  const t = useTranslations("cartPage");
  const totalArticleInCart = useSelector(
    (state: RootState) => state.cart.CartItemsList
  );
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginBottom: 2,
          width: "100%",
          borderRadius: 2,
        }}
      >
        {totalArticleInCart.length === 0 && <NoArticle />}

        {totalArticleInCart.length > 0 && (
          <>
            <Typography variant="h4" gutterBottom component={"h1"}>
              {t("title")}
            </Typography>
            <ArticleItemCart />
          </>
        )}
      </Paper>
    </>
  );
}
