/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import imageHeader from 'assets/desktop/image-header.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import ArrowDown from 'assets/icon-arrow-down.svg';

export default function Banner() {
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Heading as='h1' variant='heroPrimary'>
          WE ARE CREATIVES
        </Heading>
      </Container>
      <Image src={imageHeader} alt='banner' />
      <Box sx={styles.banner.imageBox}>
        {' '}
        <Image src={ArrowDown} alt='arrow' />
      </Box>

      {/* <Box sx={styles.banner.contentBox}> */}
      {/* <Text as="p" variant="heroSecondary">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </Text> */}
      {/* <Button variant="primary">Explore</Button> */}
      {/* </Box> */}
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      position: 'absolute',
      marginleft: 'auto',
      marginright: 'auto',
      left: 0,
      right: 0,
      textAlign: 'center',

      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      // transform: 'translateY(-150%)',
      '@media screen and (min-width: 1024px)': {
        top: '400px',
      },
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '230px',
        width: 'auto',
        height: '40px',
        '@media screen and (min-width: 1024px)': {
          top: '500px',
          width: 'auto',
          height: '100px',
        },
      },
    },
  },
};
