// components/ProfileRow.tsx
import { Grid, Typography, Button, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
interface ProfileRowProps {
  label: string;
  value: any;
  onEdit?: () => void;
  editLabel?: string;
  tooltip?: string;
  labelSize?: number;
  valueSize?: number;
  actionSize?: number;
  isVerified?: boolean;
}

export default function ProfileRow({
  label,
  value,
  onEdit,
  editLabel = "Edit",
  tooltip,
  labelSize = 4,
  valueSize = 4,
  actionSize = 4,
  isVerified = false,
}: ProfileRowProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        my: 1,
      }}
    >
      <Grid size={labelSize}>
        <Typography
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
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
        <Typography
          variant="subtitle1"
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {value}{" "}
          {isVerified && <CheckCircleIcon color="success" sx={{ ml: 1 }} />}
        </Typography>
      </Grid>
      <Grid size={actionSize} sx={{ textAlign: "right" }}>
        {onEdit && <Button onClick={onEdit}>{editLabel}</Button>}
      </Grid>
    </Grid>
  );
}
