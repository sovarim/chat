import PropTypes from "prop-types";
import { Fab, IconButton } from "@material-ui/core";

const ActionButton = ({
  classes,
  color,
  Icon,
  variant,
  fabVariant,
  fab,
  ...other
}) => {
  return (
    <>
      {fab ? (
        <Fab className={classes} color={color} variant={fabVariant} {...other}>
          {Icon}
        </Fab>
      ) : (
        <IconButton color={color} {...other}>
          {Icon}
        </IconButton>
      )}
    </>
  );
};

ActionButton.defaultProps = {
  classes: "",
  color: "primary",
  Icon: "",
  fab: false,
  fabVariant: "circular",
};

ActionButton.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  fab: PropTypes.bool,
  fabVariant: PropTypes.oneOf(["circular", "extended", "round"]),
};

export { ActionButton };
