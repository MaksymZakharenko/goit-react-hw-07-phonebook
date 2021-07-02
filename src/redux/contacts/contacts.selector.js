
import { createSelector } from "@reduxjs/toolkit";

export const loadingSelector = (state) => state.loading;
export const contactsFilterSelector = (state) => state.filter;
export const contactsItemsSelector = (state) => state.items;
  
export const filteredItemsSelector = createSelector([
    contactsItemsSelector,
    contactsFilterSelector,
], (items, filter) => items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
));
