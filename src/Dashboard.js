import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const topics = ["technology", "work", "office"];

  const [textValue, changeTextValue] = React.useState("");

  return (
    <Container>
      <Paper className={classes.root}>
        <Container>
          <Row>
            <Col xs={4}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {topics.map((item, key) => (
                    <Dropdown.Item key={item}>{item}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Typography variant="h1" component="h2">
                {textValue}
              </Typography>
            </Col>
          </Row>
        </Container>
      </Paper>

      <Paper className={classes.root}>
        <Container>
          <Row>
            <Col>
              <TextField
                id="outlined-basic"
                label="send a chat"
                className={classes.textField}
                value={textValue}
                onChange={e => changeTextValue(e.target.value)}
                variant="outlined"
              />
              <Button>SEND</Button>
            </Col>
          </Row>
        </Container>
      </Paper>
    </Container>
  );
}
