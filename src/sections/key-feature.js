/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
// import Performance from 'assets/key-feature/performance.svg';
// import Partnership from 'assets/key-feature/partnership.svg';
// import Subscription from 'assets/key-feature/subscription.svg';
// import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    // imgSrc: Performance,
    altText: 'Transform your brand',
    title: 'Transform your brand',
    text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
  },
  {
    id: 2,
    // imgSrc: Partnership,
    altText: 'Stand out to the right audience',
    title: 'Stand out to the right audience',
    text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
  },
  {
    id: 3,
    // imgSrc: Subscription,
    altText: 'Graphic Design',
    title: 'Graphic Design',
    text: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
  },
  {
    id: 4,
    // imgSrc: Support,
    altText: 'Photography',
    title: 'Photography',
    text: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container>
        {/* <SectionHeader
          slogan='Whats the function'
          title='Meet the feature of product'
        /> */}

        <Grid sx={styles.grid}>
          {data.map((item) =>
            // <FeatureCardColumn
            //   key={item.id}
            //   // src={item.imgSrc}
            //   // alt={item.altText}
            //   title={item.title}
            //   text={item.text}
            // />
            console.log(item)
            // item.id
            // item.title
            // item.text
          )}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
