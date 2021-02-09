// import "./experience.css";

// const Experience = () => {
//   return (
//     <div className="experience">
//       <h1>Mosaic House Design Hotel</h1>
//       <h2>Front Desk</h2>
//       <ul>
//         <li>Manage guests’ invoices and payments</li>
//         <li>
//           Support and aid guests and facilitate their check-in and check-out
//           procedures
//         </li>
//         <li>
//           Assist in the training of new employees, interpret and communicate
//           work procedures and company policies
//         </li>
//         <li>Maintain telecommunications systems and security</li>
//       </ul>
//       <h1>El Faramawy</h1>
//       <h2>Salesman and Accountant</h2>
//       <ul>
//         <li>
//           -Supported customers and provided excellent customer experience
//           leading to over-achievement across all customer satisfaction metrics
//         </li>
//         <li>
//           -Enhanced the selling and bookkeeping process via constant process
//           improvement by determining inefficiencies.
//         </li>
//         <li>
//           -Assisted in selling an immense variety of the company’s products to
//           potential consumers.
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Experience;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 5,
    marginTop: 40,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
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
          <Typography className={classes.pos} color="textSecondary">
            Front Desk
          </Typography>
          <Typography variant="body2" component="p">
            Manage guests’ invoices and payments.
          </Typography>
          <Typography variant="body2" component="p">
            Support and aid guests and facilitate their check-in and check-out
            procedures.
          </Typography>
          <Typography variant="body2" component="p">
            Assist in the training of new employees, interpret and communicate
            work procedures and company policies.
          </Typography>
          <Typography variant="body2" component="p">
            Maintain telecommunications systems and security.
          </Typography>
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
          <Typography className={classes.pos} color="textSecondary">
            Salesman and Accountant
          </Typography>
          <Typography variant="body2" component="p">
            Supported customers and provided excellent customer experience
            leading to over-achievement across all customer satisfaction
            metrics.
          </Typography>
          <Typography variant="body2" component="p">
            Enhanced the selling and bookkeeping process via constant process
            improvement by determining inefficiencies.
          </Typography>
          <Typography variant="body2" component="p">
            Assisted in selling an immense variety of the company’s products to
            potential consumers.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
