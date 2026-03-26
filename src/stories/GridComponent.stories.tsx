import { fn } from 'storybook/test';

import GridComponent from '../components/GridComponent';
import { AppSettings } from '../store/config';

export default {
  title: 'Components/GridComponent',
  component: GridComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { 
    direction: fn(),
    gridSize: AppSettings.GridSize
    },
};

export const CenterDirectionNorth = {
  args: {
    direction : '2,2 NORTH',
    gridSize: 5
  },
};

export const BottomLeftDirectionWest = {
  args: {
    direction : '0,0 WEST',
    gridSize: 5
  },
};

export const TopRightDirectionEast = {
  args: {
    direction : '4,4 EAST',
    gridSize: 5
  },
};

export const TopLeftDirectionWest = {
  args: {
    direction : '0,4 WEST',
    gridSize: 5
  },
};

export const CenterRightDirectionSouth = {
  args: {
    direction : '4,2 SOUTH',
    gridSize: 5
  },
};

export const CenterOffset1RightDirectionEast = {
  args: {
    direction : '3,2 EAST',
    gridSize: 5
  },
};

export const CenterOffset1TopLeftDirectionSouth = {
  args: {
    direction : '1,3 SOUTH',
    gridSize: 5
  },
};

export const LargeGrid10 = {
  args: {
    direction: '',
    gridSize: 10
  },
};

