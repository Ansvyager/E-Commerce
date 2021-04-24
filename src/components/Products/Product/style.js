import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    position: "relative",
    top: "100px",
    maxWidth: "100%",
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "55.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
