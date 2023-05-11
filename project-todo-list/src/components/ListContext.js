import React, { createContext, useState } from 'react';

export const ListContext = createContext();

export const AppContext = React.createContext({
    selectedItem: null,
    setSelectedItem: () => {},
    itemList: [],
    setItemList: () => {},
});