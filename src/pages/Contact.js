import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <Layout>
      <Box
      sx={{my:10,ml:10,'& h4':{ fontWeight:'bold',mb:2}}}>
        <Typography variant='h4' > Contact Us</Typography>
        <p>

        </p>
      </Box>
      <Box 
      sx={{
        cursor:'pointer',
        m:3,
        width:'600px',
        ml:10,
        '@media (ma-width:600px':{
          width: '300px'
        }
        }}>
        <TableContainer component={Paper}>
          < Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:"white"}} >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon
                  sx={{color:'red', pt:1}}
                  /> 0746496943 (tollfree)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Mail
                  sx={{color:'skyblue', pt:1}}
                  /> help@valuvalu.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Twitter
                  sx={{color:'skyblue', pt:1}}
                  /> @valuvalu
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Instagram
                  sx={{color:'skyblue', pt:1}}
                  /> @valuvalu
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Facebook
                  sx={{color:'skyblue', pt:1}}
                  /> gijo@valuvalu.com
                </TableCell>
              </TableRow>
             </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact