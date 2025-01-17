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
import { omit } from 'ramda';
import { initialState as dddcInitialState } from 'redux/modules/applications/dddc';
import { initialState as bcnnowInitialState } from 'redux/modules/applications/bcnnow';

const migrateV2Applications = {
  dddc: dddcInitialState,
  bcnnow: bcnnowInitialState,
};

const migrations = {
  0: omit(['applications']),
  1: omit(['attributes']),
  2: ({ applications, ...rest }) => ({
    applications: migrateV2Applications,
    ...rest,
  }),
  3: omit(['applications']),
  4: omit(['applications']),
};

export default migrations;
