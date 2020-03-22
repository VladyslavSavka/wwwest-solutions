import React from 'react';

const {
  Provider : FakeNewsServiceProvider,
  Consumer : FakeNewsServiceConsumer
} = React.createContext();

export {
    FakeNewsServiceProvider,
    FakeNewsServiceConsumer
};