import React from 'react';
import Text from '../../foundation/Text';
import Button from '../../commons/Button';
import Grid from '../../foundation/Grid';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
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
            onClick={() => websitePageContext.toggleModalCadastro()}
          >
            Cadastrar
          </Button>
        </Grid.Col>

        <Grid.Col
          col={{ xs: 12, md: 6 }}
        >
          <img
            alt="Celular com vers??o mobile do site"
            style={{ display: 'block', margin: 'auto' }}
            src="/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
