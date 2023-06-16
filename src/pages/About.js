import {Box, Typography } from "@mui/material"
import Layout from "../components/Layout/Layout"

const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:15,
        textAlign: 'center',
        p:2,
        '$ h4': {
          fontWeight:'bold',
        my:2,
        fontSize:'2rem',
        },
        '@media (max-width:60px)':{
        mt:0, 
        '$ h4' :{
          fontSize:'1rem'
        }
        }
      }}
      >
        <Typography variant="h4" color={'chocolate'} >
        Koqwet Food Court delight customers
        </Typography>
      </Box>
        <p>

          Koqwet Food Court is a restaurant located in the heart of Nairobi, Kenya. It serves a variety of local dishes from all over Kenya, as well as some international favorites. The menu is designed to offer something for everyone, from spicy curries to succulent kebabs, and everything in between. The restaurant has a cozy and inviting atmosphere, and the staff are friendly and professional.I recently visited Kiqwet Food Court and was impressed by the quality of the food and the level of service. The food was fresh and flavorful and the portions were generous. The staff was friendly and helpful, and they went out of their way to make sure my experience was a pleasant one. I would definitely recommend this restaurant to anyone looking for a unique dining experience in Nairobi. 
        </p>
        <br/>
        
        <p>
        Koqwet food court offers traditional Kenyan cuisine with modern twist. With a cozy and inviting atmosphere, you can enjoy delicious dishes such as Ugali wimbi, Ugali, chapatti, mursik, fish, pilau, nyama choma. Come experience the flavours of Koqwet food court
        </p>
    </Layout>
  )
}

export default About