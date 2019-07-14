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

import styled from 'styled-components/native';
import { TextInput, Picker } from 'react-native';

export const AttributeInput = styled(TextInput)({
  marginVertical: 10,
  paddingHorizontal: 10,
  paddingVertical: 0,
  borderWidth: 1,
  height: 35,
  width: 190,
});

export const EnumPicker = styled(Picker)({
  height: 200,
  width: 200,
});

export const EnumPickerItem = Picker.Item;
