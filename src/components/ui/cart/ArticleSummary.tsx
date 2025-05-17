import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { Button, TextField } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import { BiSolidOffer } from "react-icons/bi";
import { useTranslations } from "next-intl";

export default function ArticleSummary({
  totalPrice,
  totalGST,
  finalTotal,
  currencyCode,
}: {
  totalPrice: number;
  totalGST: number;
  finalTotal: number;
  currencyCode: string;
}) {
  const t = useTranslations("cartPage");
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body1">
            {t("ordersummaryoriginalprice")} :
          </Typography>
          <Typography variant="body1">40</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body1">
            {t("ordersummarygstperslab")} :
          </Typography>
          <Typography variant="body1">40</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body1">{t("ordersummaryshipping")} :</Typography>
          <Typography variant="body1">Free</Typography>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="body1">{t("ordersummarysubtotal")}</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, fontSize: 32 }}>
            40
          </Typography>
        </Box>

        <Button variant="contained" size="large" startIcon={<PaymentsIcon />}>
          {t("ordersummaryaction")}
        </Button>

        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6" gutterBottom>
            Have a promo code?
          </Typography>
          <TextField
            label="Promo Code"
            variant="outlined"
            fullWidth
            placeholder="Enter promo code"
            sx={{ marginBottom: 2 }}
          />
          <Button variant="outlined" fullWidth startIcon={<BiSolidOffer />}>
            Apply
          </Button>
        </Box>
      </Box>
    </>
  );
}
