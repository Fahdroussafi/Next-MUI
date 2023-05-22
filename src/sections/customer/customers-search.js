import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

export const CustomersSearch = (props) => {
  const { onSearch = () => {} } = props;

  return (
    <Card
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onSearch(e.target.value);
        }
      }}
      sx={{ p: 2 }}
    >
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search customer"
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500 }}
      />
    </Card>
  );
};
