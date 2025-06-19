import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Note } from '../utils/storage';
import { colors } from '../constants/Colors';

interface NoteCardProps {
  note: Note;
  onPress: () => void;
}

export const NoteCard = ({ note, onPress }: NoteCardProps) => {
  return (
    <TouchableOpacity style={[styles.card, { borderColor: colors[note.priority] }]} onPress={onPress}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.date}>{new Date(note.date).toLocaleDateString()}</Text>
      <Text style={styles.content} numberOfLines={2}>
        {note.content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.text,
  },
  date: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.text,
    marginVertical: 4,
  },
  content: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.text,
  },
});