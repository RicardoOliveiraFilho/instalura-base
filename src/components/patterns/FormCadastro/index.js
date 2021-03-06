import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';

import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    usuario: 'ricardo.oliveira',
    nome: 'Ricardo Oliveira',
  });

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        setIsFormSubmited(true);

        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then(respostaDoServidor => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível submeter o form');
          })
          .then(respostaConvertidaEmObjeto => {
            setSubmissionStatus(formStates.DONE);
          })
          .catch(error => {
            setSubmissionStatus(formStates.ERROR);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está rolando no bairro,
        complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
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

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
