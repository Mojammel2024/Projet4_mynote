import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { NoteCard } from '../components/NoteCard';
import { Button } from '../components/Button';
import { useNotes } from '../hooks/useNote';
import { colors } from '../constants/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function Dashboard() {
  const { notes, refreshNotes } = useNotes();
  const router = useRouter();

  // Refresh notes when the screen is focused
  useFocusEffect(
    useCallback(() => {
      refreshNotes();
    }, [refreshNotes])
  );

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.noNotes}>No notes available</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onPress={() => router.push({ pathname: '/note', params: { id: item.id } })}
            />
          )}
        />
      )}
      <Button
        title="Add"
        onPress={() => router.push('/form')}
        style={styles.addButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  noNotes: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginTop: 20,
  },
  addButton: {
    marginVertical: 16,
  },
});