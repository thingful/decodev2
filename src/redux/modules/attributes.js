/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import { createSelector } from 'reselect';
import {
  prop, mapObjIndexed, values, compose, omit, keys, merge, map,
} from 'ramda';
import { encrypt, decrypt } from 'lib/utils';
import { listAttributes } from 'api/atlas-client';

const initialState = {};

export const ACTIONS = {
  SAVE_ATTRIBUTE: 'SAVE_ATTRIBUTE',
  DELETE_ATTRIBUTE: 'DELETE_ATTRIBUTE',
};

export const saveAttribute = (id, value) => ({
  type: ACTIONS.SAVE_ATTRIBUTE,
  id,
  value,
});

export const deleteAttribute = id => ({
  type: ACTIONS.DELETE_ATTRIBUTE,
  id,
});

const getStoreBranch = prop('attributes');

export const getAttribute = id => createSelector(
  getStoreBranch,
  compose(
    decrypt,
    prop(id),
  ),
);

const addAtlasInfo = attr => merge(attr, listAttributes()[attr.name]);

export const getAllAttributes = createSelector(
  getStoreBranch,
  compose(
    values,
    map(addAtlasInfo),
    mapObjIndexed((value, name) => ({
      name,
      value: decrypt(value),
    })),
  ),
);

export const getAllAttributeNames = createSelector(
  getStoreBranch,
  keys,
);

export const getFilteredAtlasAttributes = createSelector(
  getAllAttributeNames,
  compose(
    values,
    allAttributeNames => omit(allAttributeNames, listAttributes()),
  ),
);

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_ATTRIBUTE: {
      const { id, value } = action;
      return {
        ...state,
        [id]: encrypt(value),
      };
    }
    case ACTIONS.DELETE_ATTRIBUTE: {
      const { id } = action;
      const { [id]: filteredOut, ...rest } = state;
      return {
        ...rest,
      };
    }
    default:
      return state;
  }
};
