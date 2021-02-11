import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    color: "white",
    backgroundColor: "black",
    borderRadius: "20px",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  pos: {
    color: "white",
    fontSize: 18,
  },
});

export default function Experience() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Mosaic House Design Hotel
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Front Desk
          </Typography>
          <ul style={{ padding: 15 }}>
            <Typography variant="body2" component="p">
              <li>Manage guests’ invoices and payments.</li>
            </Typography>
            <Typography variant="body2" component="p">
              <li>
                Support and aid guests and facilitate their check-in and
                check-out procedures.
              </li>
            </Typography>
            <Typography variant="body2" component="p">
              <li>
                Assist in the training of new employees, interpret and
                communicate work procedures and company policies.
              </li>
            </Typography>
            <Typography variant="body2" component="p">
              <li>Maintain telecommunications systems and security.</li>
            </Typography>
          </ul>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            El Faramawy
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Salesman and Accountant
          </Typography>
          <ul style={{ padding: 15 }}>
            <Typography variant="body2" component="p">
              <li>
                Supported customers and provided excellent customer experience
              </li>
              <li>
                leading to over-achievement across all customer satisfaction
                metrics.
              </li>
            </Typography>
            <Typography variant="body2" component="p">
              <li>
                Enhanced the selling and bookkeeping process via constant
                process improvement by determining inefficiencies.
              </li>
            </Typography>
            <Typography variant="body2" component="p">
              <li>
                Assisted in selling an immense variety of the company’s products
                to potential consumers.
              </li>
            </Typography>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
