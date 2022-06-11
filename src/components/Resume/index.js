import React, { useState } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
// import { Document } from 'react-pdf/dist/entry.webpack';
import { Document, Page } from 'react-pdf';
import resume from '../PhotoList/utils/FullStackDeveloperResume.pdf';

const Resume = () => {
    return(
        <Container fluid>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header className='header' as='h1'>Résumé</Header>
              <Document file={resume}>
                <Page pageNumber={1} />
              </Document>
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>            
          </Grid.Row>
        </Grid>
      </Container>
  
    )
  }


export default Resume;

