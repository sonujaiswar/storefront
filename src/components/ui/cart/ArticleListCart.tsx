import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function ArticleListCart({
  currencyCode,
}: {
  currencyCode: string;
}) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Image
            src={"/products/product1.jpeg"}
            width={120}
            height={0}
            alt="Product Image"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection="column"
          flexGrow={1}
          sx={{ ml: 2 }}
        >
          <Typography variant="h6">Product name</Typography>
          <Typography variant="body2" color="text.secondary">
            Product Category | Product Subcategory | Product Type | Product
            color
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            1200
          </Typography>

          <Box display={"flex"} alignItems="center" paddingTop={2} gap={2}>
            <IconButton>
              <DeleteIcon color="primary" />

              <RemoveCircleIcon color="primary" />
            </IconButton>

            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              150
            </Typography>
            <IconButton
              onClick={() => {
                console.log("add");
              }}
            >
              <AddCircleIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
