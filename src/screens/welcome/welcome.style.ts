import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  anim: { width: '100%' },
  text: {
    fontFamily: 'System',
    fontSize: 24,
    color: '#404040',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  button: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#EC008C',
  },
});
