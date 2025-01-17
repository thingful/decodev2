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
import { TouchableOpacity, View } from 'react-native';
import { Icon as CommonIcon, Text } from 'lib/styles';

export const Touchable = styled(TouchableOpacity)(
  ({
    featured,
    disabled,
    theme: { primaryColor, secondaryColor, backgroundColor, disabledTextColor },
  }) => {
    let color;
    if (disabled) color = disabledTextColor;
    else if (featured) color = secondaryColor;
    else color = backgroundColor;
    return {
      backgroundColor: color,
      padding: 10,
      borderWidth: 1,
      borderColor: featured ? primaryColor : secondaryColor,
      marginVertical: 10,
    };
  },
);

export const Wrapper = styled(View)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

export const Icon = styled(CommonIcon)((
  { featured, theme: { colors, primaryColor, fontSizeTitle } },
) => ({
  color: featured ? colors.white : primaryColor,
  paddingHorizontal: 5,
  fontSize: fontSizeTitle,
}));

export const Label = styled(Text)((
  { featured, theme: { colors, primaryColor, fontSizeText } },
) => ({
  color: featured ? colors.white : primaryColor,
  fontWeight: 'bold',
  paddingHorizontal: 5,
  fontSize: fontSizeText,
}));
