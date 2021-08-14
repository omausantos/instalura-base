import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../../foundation/Box';
import Grid from '../../../foundation/Grid';
import Text from '../../../foundation/Text';

export default function MensagemCadastro({ color, animation, msg }) {
  return (
    <Box
      cssinline={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            col={3}
          >
            <Lottie
              width="100%"
              config={{ animationData: animation, loop: true, autoplay: true }}
            />
          </Grid.Col>
          <Grid.Col
            col={9}
          >
            <Text
              tag="p"
              cssinline={{
                color,
              }}
            >
              {msg}
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

MensagemCadastro.propTypes = {
  color: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  animation: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
};
