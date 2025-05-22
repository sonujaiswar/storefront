// components/ProfileRow.tsx
import { Grid, Typography, Button, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

interface ProfileRowProps {
  label: string;
  value: any;
  onEdit?: () => void;
  editLabel?: string;
  tooltip?: string;
  labelSize?: number;
  valueSize?: number;
  actionSize?: number;
}

export default function ProfileRow({
  label,
  value,
  onEdit,
  editLabel = "Edit",
  tooltip,
  labelSize = 3,
  valueSize = 5,
  actionSize = 4,
}: ProfileRowProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", alignItems: "center", my: 1 }}
    >
      <Grid size={labelSize}>
        <Typography
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center" }}
        >
          {label}
          {tooltip && (
            <Tooltip title={tooltip}>
              <HelpIcon fontSize="small" sx={{ ml: 0.5 }} color={"primary"} />
            </Tooltip>
          )}
        </Typography>
      </Grid>
      <Grid size={valueSize}>
        <Typography variant="subtitle1">{value}</Typography>
      </Grid>
      <Grid size={actionSize} sx={{ textAlign: "right" }}>
        {onEdit && <Button onClick={onEdit}>{editLabel}</Button>}
      </Grid>
    </Grid>
  );
}
