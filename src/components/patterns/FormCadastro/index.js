import React from 'react';
import styled from 'styled-components';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Box';
import Grid from '../../foundation/Grid';
import Text from '../../foundation/Text';

const BurgerImageStyle = styled.svg`
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function ButtonClose({ onClose }) {
  return (
    <BurgerImageStyle
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        onClose();
      }}
    >
      <path d="M18 6L6 18" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BurgerImageStyle>
  );
}

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'omausantos',
    email: 'mauwebjc@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuario"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      cssinline={{
        marginLeft: 0,
        marginRight: 0,
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      <Grid.Col
        col={{ xs: 12, md: 6, lg: 6 }}
        cssinline={{
          display: 'flex',
          paddingRight: { md: 0 },
          flex: 1,
        }}
      >
        <Box
          cssinline={{
            boxShadow: '-10px 0px 24px rgba(7, 12, 14, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: {
              xs: '16px',
              md: '85px',
            },
            backgroundColor: 'white',
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <ButtonClose
            // eslint-disable-next-line react/prop-types
            onClose={propsDoModal.onClose}
          />
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
