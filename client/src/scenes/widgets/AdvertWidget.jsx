import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${apiUrl}/assets/info4.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>CosmoCosmetics</Typography>
        <Typography color={medium}>cosmocosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        For stunning and immaculate beauty
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
