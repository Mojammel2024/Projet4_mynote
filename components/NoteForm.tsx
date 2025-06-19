import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Note } from '../utils/storage';
import { priorities } from '../constants/priorities';
import { colors } from '../constants/Colors';

interface NoteFormProps {
  note?: Note;
  onSave: (title: string, content: string, priority: Note['priority']) => void;
}

export const NoteForm = ({ note, onSave }: NoteFormProps) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [priority, setPriority] = useState<Note['priority']>(note?.priority || 'normal');

  const handleSave = () => {
    // Sanitize inputs
    if (title.trim() && content.trim()) {
      onSave(title.trim(), content.trim(), priority);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Picker
        selectedValue={priority}
        onValueChange={(itemValue) => setPriority(itemValue)}
        style={styles.picker}
      >
        {priorities.map((p) => (
          <Picker.Item key={p.value} label={p.label} value={p.value} />
        ))}
      </Picker>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    flex: 1,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    fontFamily: 'Montserrat-Regular',
    marginVertical: 8,
  },
});