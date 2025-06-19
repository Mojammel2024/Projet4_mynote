import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

export const Button = ({ title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    fontSize: 16,
  },
});