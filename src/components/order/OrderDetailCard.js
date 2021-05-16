/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OrderDetailCard({ details }) {
  const classes = useStyles();
  const filePath = process.env.REACT_APP_UPLOAD_DOCUMENT_URL;

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>{details.topic}</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} />
          <Grid item xs={3}>
            <h4>Subject</h4>
          </Grid>
          <Grid item xs={3}>
            {details.subject}
          </Grid>
          <Grid item xs={3}>
            <h4>Paper Length</h4>
          </Grid>
          <Grid item xs={3}>
            {details.paperLength}
          </Grid>
          <Grid item xs={3}>
            <h4>Reference Style</h4>
          </Grid>
          <Grid item xs={3}>
            {details.referenceStyle}
          </Grid>
          <Grid item xs={3}>
            <h4>Document Type</h4>
          </Grid>
          <Grid item xs={3}>
            {details.documentType}
          </Grid>
          <Grid item xs={3}>
            <h4>Reference Style</h4>
          </Grid>
          <Grid item xs={3}>
            {details.referenceStyle}
          </Grid>
          <Grid item xs={3}>
            <h4>Dead Line</h4>
          </Grid>
          <Grid item xs={3}>
            {details.deadLine}
          </Grid>
          <Grid item xs={3}>
            <h4>Created On</h4>
          </Grid>
          <Grid item xs={3}>
            {details.createdOn}
          </Grid>
          <Grid item xs={3}>
            <h4>Academic Option</h4>
          </Grid>
          <Grid item xs={3}>
            {details.academicOption}
          </Grid>
          <Grid item xs={3}>
            <h4>Academic Level</h4>
          </Grid>
          <Grid item xs={3}>
            {details.academicLevel}
          </Grid>
          <Grid item xs={3}>
            <h4>Document 1</h4>
          </Grid>
          <Grid item xs={3}>
            <a
              href={`${filePath}${details.document_1 && details.document_1[0].filename}`}
              target="_blank"
              rel="noreferrer"
              title={`${details.document_1 && details.document_1[0].originalname}`}
            >
              {details.document_1 && details.document_1[0].originalname && <PictureAsPdfIcon />}
            </a>
          </Grid>
          <Grid item xs={3}>
            <h4>Document 2</h4>
          </Grid>
          <Grid item xs={3}>
            <a
              href={`${filePath}${details.document_2 && details.document_2[0].filename}`}
              target="_blank"
              rel="noreferrer"
              title={`${details.document_2 && details.document_2[0].originalname}`}
            >
              {details.document_2 && details.document_2[0].originalname && <PictureAsPdfIcon />}
            </a>
          </Grid>
          <Grid item xs={3}>
            <h4>Document 3</h4>
          </Grid>
          <Grid item xs={3}>
            <a
              href={`${filePath}${details.document_3 && details.document_3[0].filename}`}
              target="_blank"
              rel="noreferrer"
              title={`${details.document_3 && details.document_3[0].originalname}`}
            >
              {details.document_3 && details.document_3[0].originalname && <PictureAsPdfIcon />}
            </a>
          </Grid>
          <Grid item xs={3}>
            <h4>Document 4</h4>
          </Grid>
          <Grid item xs={3}>
            <a
              href={`${filePath}${details.document_4 && details.document_4[0].filename}`}
              target="_blank"
              rel="noreferrer"
              title={`${details.document_4 && details.document_4[0].originalname}`}
            >
              {details.document_4 && details.document_4[0].originalname && <PictureAsPdfIcon />}
            </a>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{details.message}</Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
OrderDetailCard.propTypes = {
  details: PropTypes.array
};
