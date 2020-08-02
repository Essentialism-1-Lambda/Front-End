import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { userData } from '../DataStubs/data.js';
import { ValuesIcon } from './ValuesIcon.jpg';
// import ProjectList from './ProjectList';



import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));


export default function ValueCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
        <div className="valueBtns">
          {userData.values.map( values => {
            return (
              <Button type="button" onClick={handleOpen}>
                {`${values.name}`}
              </Button>
            )
          }
          )}
            {/* <Button type="button" onClick={handleOpen}>
                Family
            </Button>
            <Button type="button" onClick={handleOpen}>
                Community
            </Button>
            <Button type="button" onClick={handleOpen}>
                Health and Wellness
            </Button>
            <Button type="button" onClick={handleOpen}>
                Environmental
            </Button>
            <Button type="button" onClick={handleOpen}>
                Financial
            </Button> */}
        </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ValuesIcon}
                  title="Values icon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Value Title
                    {/* ${userData.values} */}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {/* <ProjectList projects={userData.projects}> */}

                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                          View Dashboard
                    </Button>
                </CardActions>
            </Card>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
