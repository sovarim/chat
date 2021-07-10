import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle,
  Search as SearchIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = ({ onMenuSwitch, title }) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onMenuSwitch}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Hidden>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  title: "Title",
  onMenuSwitch: null,
};

Header.propTypes = {
  onMenuSwitch: PropTypes.func,
  title: PropTypes.string,
};

export { Header };