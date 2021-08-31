import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import Grid from '../../foundation/Grid';
import Box from '../../foundation/Box';
import Text from '../../foundation/Text';

export default function FAQQuestionScreen({ category, question }) {
  const theme = useTheme();

  return (
    <Grid.Container
      cssinline={{
        flex: '1',
        marginTop: {
          xs: '32px',
          md: '80px',
        },
      }}
    >
      <Grid.Row
        cssinline={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}
      >
        <Grid.Col
          cssinline={{
            offset: { sm: 0, lg: 1 },
          }}
          col={{ xs: 12, md: 4, lg: 4 }}
        >
          <Text
            variant="title"
            color="tertiary.main"
            cssinline={{
              marginBottom: '25px',
            }}
          >
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            cssinline={{
              listStyle: 'none',
              padding: '24px 30px',
              backgroundColor: theme.colors.borders.main.color,
            }}
            borderRadiusTheme
          >
            {category.questions.map((currentQuestion) => (
              <Text
                key={currentQuestion.slug}
                as="li"
                variant="paragraph2"
                href={`/${currentQuestion.slug}`}
                color="primary.main"
                cssinline={{
                  marginBottom: '16px',
                }}

              >
                {currentQuestion.title}
              </Text>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          col={{ lg: 6 }}
          cssinline={{
            marginBottom: {
              xs: '50px',
              md: '0',
            },
          }}

        >
          <Text
            variant="title"
            color="tertiary.main"
          >
            {question.title}
          </Text>
          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
