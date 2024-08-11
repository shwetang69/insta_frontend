import React, { useState, useEffect } from "react";
import Footer from "../footer";
import { Button, Box, Link, Typography, Stack, InputAdornment, IconButton, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Fade from "@mui/material/Fade";

//----------------------------- Image URLs -----------------------------
const LoginImage1 = "/images/loginpage1.png";
const LoginImage2 = "/images/loginpage2.png";
const LoginImage3 = "/images/loginpage3.png";
const LoginImage4 = "/images/loginpage4.png";
const LoginBackground = "/images/loginpage.png";
const InstagramLogoUrl = "/images/insta.png";

//----------------------------- Styled Components -----------------------------
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '2.5rem',
    backgroundColor: '#fafafa',
    borderRadius: '2px',
  },
  '& .MuiInputBase-input': {
    padding: '0.5rem',
    fontSize: '0.8rem',
  },
  width: '95%',
  marginBottom: '2px',
}));

const FormStyle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  width: '100%',
  maxWidth: 310,
  gap: '1rem', // Add spacing between green and blue boxes
});

const InstagramLogo = styled(Box)({
  backgroundImage: `url(${InstagramLogoUrl})`,
  backgroundPosition: '0px 0px',
  backgroundSize: '175px 51px',
  width: '175px',
  height: '51px',
  marginTop: '25px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
});

//----------------------------- Login Component -----------------------------
const Login = () => {
  // State variables
  const [showPassword, setShowPassword] = useState(false);
  const [show1, setShow1] = useState(1);

  // Effect to handle image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setShow1((prev) => (prev < 4 ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle password visibility toggle
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingBottom: 10, // Adjust the padding to ensure space for the footer
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Box sx={{ display: 'flex', width: '100%', height: '70%' }}>
          {/*-------------------------colour box start-----------------------------*/}
          {/* Background Image with Slideshow */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              position: 'relative',
              width: '100%',
              height: 600,
              backgroundImage: `url(${LoginBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 2px',
              border: '5px solid #FF6347', // Tomato color for the border
              padding: 0, // Remove padding
              margin: 0,  // Remove margin
              overflow: 'hidden' // Hide overflow
            }}
          >
            {[LoginImage1, LoginImage2, LoginImage3, LoginImage4].map((src, index) => (
              <Fade in={show1 === index + 1} timeout={1500} key={index}>
                <img
                  src={src}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: 28,
                    right: 58,
                    opacity: show1 === index + 1 ? 1 : 0,
                    transition: 'opacity 1.5s ease-in-out',
                  }}
                />
              </Fade>
            ))}
          </Box>
          {/*-------------------------colour box end-----------------------------*/}

          <FormStyle>
            {/*-------------------------green box start-----------------------------*/}
            {/* Login Form */}
            <Box
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                border: '5px solid #4CAF50', // Green color for the border
                bgcolor: 'white',
              }}
            >
              <InstagramLogo />
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: '0.94rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mb: 1,
                  mt: 2,
                  color: 'grey',
                }}
              >
                Sign up to see photos and videos <br /> from your friends.
              </Typography>
              <Stack spacing={0.6} width="100%" alignItems="center">
                <StyledTextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  placeholder="Mobile number or email"
                />
                <StyledTextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  placeholder="Full name"
                />
                <StyledTextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  placeholder="Username"
                />
                <StyledTextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ mt: 2, fontSize: '0.75rem', textAlign: 'center' }}
              >
                People who use our service may have uploaded your contact information
                to Instagram. <Link href="#" sx={{ fontSize: '0.75rem' }}>Learn More</Link>
              </Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ fontSize: '0.75rem', textAlign: 'center' }}
              >
                By signing up, you agree to our <Link href="#" sx={{ fontSize: '0.75rem' }}>Terms</Link>,
                <Link href="#" sx={{ fontSize: '0.75rem' }}>Privacy Policy</Link> and
                <Link href="#" sx={{ fontSize: '0.75rem' }}>Cookies Policy</Link>.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: 'rgb(0, 149, 246)',
                  color: 'white',
                  width: '94%',
                  mt: 1.3,
                  mb: 0.5,
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  borderRadius: 1.5,
                  boxShadow: 'none',
                }}
              >
                Sign Up
              </Button>
            </Box>
            {/*-------------------------green box end-----------------------------*/}

            {/*-------------------------blue box start-----------------------------*/}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={2}
              width={310}
              height={33}
              sx={{ bgcolor: 'white', border: '5px solid #1E90FF' }} // DodgerBlue color for the border
            >
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                Have an account?{' '}
                <Link href="#" sx={{ fontSize: '0.875rem' }}>
                  Log in
                </Link>
              </Typography>
            </Box>
            {/*-------------------------blue box end-----------------------------*/}
          </FormStyle>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Login;
