import { fn } from 'storybook/test';

import InputComponent from '../components/InputComponent';
import { validateAndFormatInput } from '../helper/helper';
import { AppSettings } from '../store/config';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { 
    setDirection: fn(),
    gridSize: AppSettings.GridSize,
    validator: validateAndFormatInput,
    initialValue : ''
    },
  render: (args : any) => <InputComponent key={args.initialValue} {...args} />,
};

export const ValidInput = {
  args:{
    gridSize:AppSettings.GridSize,
    validator:validateAndFormatInput,
    initialValue : '2,2 NORTH'
  },
};

export const ValidInputCoordinateWith1Space = {
  args:{
    gridSize:AppSettings.GridSize,
    validator:validateAndFormatInput,
    initialValue : '2, 2 NORTH'
  },
};

export const AlwaysFail = {
  args: {
    gridSize: 5, 
    validator: () => ({ errorMessage: 'This story will always fail.', formattedInput: '' })
  },
};

export const InvalidInputFormat = {
  args: {
    initialValue : 'ABC 123'
  },
};

export const CoordinateOutOfRange = {
  args: {
    initialValue : '15,10 NORTH'
  },
};

export const InvalidDirection = {
  args: {
    initialValue : '1,2 SOMEWHERE'
  },
};

