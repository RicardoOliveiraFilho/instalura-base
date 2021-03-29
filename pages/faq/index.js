import React from 'react';

import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />;
}

FAQPage.propTypes = FAQScreen.propTypes;

export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  )
    .then(respostaDoServer => respostaDoServer.json())
    .then(respostaConvertida => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    },
  };
}
