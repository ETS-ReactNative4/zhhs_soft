import PropTypes from "prop-types";
import brand from "assets/logo/ZHHS-1-01 small 2.png";
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// function BasicLayout({ title, description, image, children }) {
function BasicLayout({ image, children }) {
  return (
    <PageLayout>
      <SuiBox
        width="calc(100% - 2rem)"
        minHeight="50vh"
        borderRadius="lg"
        mx={2}
        my={2}
        pt={4}
        pb={24}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {/* <Grid item xs={10} lg={4}>
            <SuiBox mt={0} mb={1}>
              <SuiTypography variant="h3" color="white" fontWeight="bold">
                {title}
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </SuiTypography>
            </SuiBox>
          </Grid> */}
          <SuiBox component="img" src={brand} alt="Soft UI Logo" width="10rem" />
        </Grid>
      </SuiBox>
      <SuiBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  // title: "",
  // description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  // title: PropTypes.string,
  // description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
