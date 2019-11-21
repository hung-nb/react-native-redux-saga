import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// eslint-disable-next-line import/extensions
import Button from './Button'
import CenterView from './CenterView'
import Welcome from './Welcome'
import StyledButton from '../../app/components/button'
import Spinner from '../../app/components/spinner'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('styled button', () => (
    <StyledButton title="Some title here" />
  ))

storiesOf('Loading', module)
  .add('spinner', () => <Spinner />)