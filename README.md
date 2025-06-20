# myNotes

A mobile note-taking application for AZIENDA employees, built with React Native and Expo. The app allows users to create, view, edit, and delete notes with local storage, priority-based color coding, and a responsive design for mobile and tablet devices.

## Setup
1. Clone the repository: `git clone https://github.com/Mojammel2024/Projet4_mynote.git` (replace with your GitHub repository URL)
2. Install dependencies: `npm install`
3. Start the app: `npx expo start`
4. Scan the QR code with Expo Go on your Android or iOS device.

## Technologies
- **React Native**: Cross-platform framework for Android and iOS.
- **Expo**: Simplifies development, testing, and deployment.
- **AsyncStorage**: Local storage for note persistence.
- **TypeScript**: Static typing for code reliability.
- **Expo Router**: File-based navigation for stack-based routing.
- **Montserrat Font**: Used for UI as per the charte graphique.
- **@react-native-picker/picker**: For priority selection in the Form screen.
- **uuid**: Generates unique note IDs.

## Dependencies
See `package.json` for the full list of dependencies, including:
- `@react-native-async-storage/async-storage`
- `@react-native-picker/picker`
- `uuid`
- `expo-font`
- `expo-router`
- `react-navigation/native`


## Deployment Notes
- **Prerequisites**: Ensure Node.js, npm, and Expo CLI are installed (`npm install -g expo-cli`).
- **Testing**: Use Expo Go on a physical device for testing. Enable remote debugging in Expo Go to view console logs.
- **Troubleshooting**: If notes don’t persist, check AsyncStorage logs in Chrome DevTools (via `chrome://inspect`).

## Development
- The app uses a multi-layered architecture:
  - **Presentation**: UI components (`components/ui/*`, `app/*.tsx`).
  - **Business Logic**: Note management (`hooks/useNotes.ts`).
  - **Data**: Local storage (`utils/storage.ts`).
  - **Security**: Input sanitization and delete confirmation.
- Version control: Managed via Git and GitHub with regular commits.
