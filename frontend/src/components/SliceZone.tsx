// components/SliceZone.jsx
import React from 'react';
import { SliceZone } from '@prismicio/react';
import { Client } from '../prismicio';
import MySlice from '../slices/MySlice';

const resolver = {
  my_slice: (props) => <MySlice {...props} />,
  // adicione outros slices aqui
};

const SliceZoneComponent = ({ slices }) => {
  return <SliceZone slices={slices} resolver={resolver} />;
};

export default SliceZoneComponent;