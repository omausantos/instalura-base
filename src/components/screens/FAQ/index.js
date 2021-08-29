import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import Box from '../../foundation/Box';
import Grid from '../../foundation/Grid';
import Menu from '../../commons/Menu';
import Footer from '../../commons/Footer';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';

export default function FAQScreen({ faqCategories }) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      cssinline={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
      }}
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} />
        )}
      </Modal>

      <Menu
        onOpenModal={() => setModalState(true)}
      />

      <Grid.Container style={{ flex: 1 }}>
        <Grid.Row
          cssinline={{
            marginTop: { xs: '32px', md: '100px' },
            marginBottom: { xs: '32px', md: '100px' },
            justifyContent: 'center',
          }}
        >
          <Grid.Col
            col={{ xs: 12, md: 12 }}
            cssinline={{
              flex: '1',
            }}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              cssinline={{
                textAlign: 'center',
              }}
            >
              Como podemos te ajudar?
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          cssinline={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: '1',
          }}
        >
          {
            faqCategories && faqCategories.map((category) => (
              <Grid.Col
                col={{ xs: 12, md: 3 }}
                key={category.title}
                cssinline={{
                  flex: '1',
                }}
              >
                <Box
                  cssinline={{
                    width: '100%',
                  }}

                >
                  <Text
                    variant="subTitle"
                    tag="h2"
                    color="tertiary.main"
                    cssinline={{
                      marginBottom: '26px',
                    }}

                  >
                    {category.title}
                  </Text>

                  <Box
                    as="ul"
                    cssinline={{
                      padding: '0',
                      listStyle: 'none',
                    }}

                  >
                    {category.questions.map((question) => (
                      <li key={question.title}>
                        <Text
                          href={`/faq/${question.slug}`}
                          variant="paragraph1"
                          tag="h2"
                          color="tertiary.light"
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid.Col>
            ))
          }
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
};
