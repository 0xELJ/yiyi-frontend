import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../base/colors';
import { shadows } from '../../base/shadows';
import { fonts, typography } from '../../base/typography';

export const base: ViewStyle = {
    minWidth: 140,
    maxWidth: '75%',
    marginBottom: 12,
    flexDirection: 'column',
    padding: 8,
    borderRadius: 16,
    ...shadows.primary,
};

const createTextStyles = (color: string) => StyleSheet.create<{ [key: string]: TextStyle }>({
    username: {
        ...typography.body,
        fontFamily: fonts.semiBold,
        color
    },
    message: {
        ...typography.body,
        marginVertical: 4,
        color
    },
    date: {
        ...typography.tiny,
        marginLeft: 'auto',
        color
    }
});

export const messageContent = StyleSheet.create({
    ownMsg: {
        ...base,
        alignSelf: 'flex-end',
        backgroundColor: colors.greenDark,
        color: colors.white,
        borderBottomRightRadius: 0
    },
    externalMsg: {
        ...base,
        alignSelf: 'flex-start',
        backgroundColor: colors.white,
        color: colors.greyDarkOne,
        borderBottomLeftRadius: 0
    }
});

export const ownMsgText = StyleSheet.create({ ...createTextStyles(colors.white) });

export const externalMsgText = StyleSheet.create({ ...createTextStyles(colors.greyDarkOne) });
