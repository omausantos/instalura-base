import React from 'react';
import styled from 'styled-components';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Box';
import Grid from '../../foundation/Grid';
import Text from '../../foundation/Text';
import MensagemCadastro from './animations';

const ButtonImage = styled.svg`
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function ButtonClose({ onClose }) {
  return (
    <ButtonImage
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
    </ButtonImage>
  );
}

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    username: 'omausantos',
    name: 'Mauricio Santos',
  });
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.username.length === 0 || userInfo.name.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setIsFormSubmited(true);

      const userDTO = {
        username: userInfo.username,
        name: userInfo.name,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            return respostaDoServidor.json();
          }

          throw new Error('N??o foi poss??vel cadastrar o usu??rio agora');
        })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        });
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
        Voc?? est?? a um passo de saber tudo o que est??
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuario"
          name="username"
          value={userInfo.username}
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

      {isFormSubmited && submissionStatus === formStates.DONE && (
      <MensagemCadastro
        msg="Cadastro efetuado com sucesso!"
        color="green"
        animation={successAnimation}
      />
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
      <MensagemCadastro
        msg="Deu ruim, tentar novamente!"
        color="red"
        animation={errorAnimation}
      />
      )}

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
