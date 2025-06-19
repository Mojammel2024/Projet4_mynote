import { Modal as RNModal, View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';
import { colors } from '../constants/Colors';

interface ModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal = ({ visible, onConfirm, onCancel }: ModalProps) => {
  return (
    <RNModal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>Are you sure you want to delete this note?</Text>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={onCancel} style={styles.cancelButton} />
            <Button title="Delete" onPress={onConfirm} style={styles.deleteButton} />
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#808080',
  },
  deleteButton: {
    backgroundColor: colors.important,
  },
});