import { View, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useNotes } from '../hooks/useNote';
import { NoteView } from '../components/NoteView';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { useState } from 'react';
import { colors } from '../constants/Colors';

export default function NoteScreen() {
  const { id } = useLocalSearchParams();
  const { notes, removeNote } = useNotes();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return null;
  }

  const handleDelete = async () => {
    await removeNote(note.id);
    router.back();
  };

  return (
    <View style={styles.container}>
      <NoteView note={note} />
      <View style={styles.buttons}>
        <Button
          title="Modify"
          onPress={() => router.push({ pathname: '/form', params: { id: note.id } })}
        />
        <Button
          title="Delete"
          onPress={() => setModalVisible(true)}
          style={styles.deleteButton}
        />
      </View>
      <Modal
        visible={modalVisible}
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  deleteButton: {
    backgroundColor: colors.important,
  },
});