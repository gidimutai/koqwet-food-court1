import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box
      sx={{my:10,ml:10,'& h4':{ fontWeight:'bold',mb:2}}}>
        <Typography variant='h4' > Contact Us</Typography>
        <p>

        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          < Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact