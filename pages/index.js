import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/Grid';
import Box from '../src/components/foundation/Box';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      cssinline={{
        flex: '2',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'center right',
          md: 'bottom right',
        },
      }}
    >

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <Box
            cssinline={{
              backgroundColor: '#fff',
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <div>
              Modal com DIV in BOX
            </div>
          </Box>
        )}
      </Modal>

      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            col={{ xs: 12, md: 5 }}
            cssinline={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              cssinline={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
                marginTop: {
                  xs: '32px',
                  md: 'initial',
                },
                marginBottom: {
                  xs: '12px',
                  md: '16px',
                },
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              cssinline={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
                marginTop: '0',
                marginBottom: {
                  xs: '24px',
                  md: '40px',
                },
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              cssinline={{
                margin: {
                  xs: 'auto',
                  md: 'initial',
                },
                display: 'block',
                marginBottom: {
                  xs: '40px',
                  md: 'initial',
                },
              }}
              onClick={() => {
                setModalState(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>

          <Grid.Col
            col={{ xs: 12, md: 6 }}
          >
            <img
              alt="Celular com versão mobile do site"
              style={{ display: 'block', margin: 'auto' }}
              src="/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
