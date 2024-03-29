import React from 'react';

import {TextInputMask} from 'react-native-masked-text';

const MaskInput = ({type, value, onChangeText}: any) => {
  return (
    <TextInputMask
      style={{width: '100%', height: 52, color: '#5555'}}
      type={type}
      value={value}
      onChangeText={text => {
        onChangeText(type, text);
      }}
    />
  );
};

export default MaskInput;
