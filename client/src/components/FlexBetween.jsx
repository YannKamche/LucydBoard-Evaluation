import { Box } from "@mui/material";
import { styled } from "@mui/system";
//styled: way to reuse styles or css in a component
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween