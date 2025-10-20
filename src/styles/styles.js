import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#F8F8F8',
    fontSize: 16,
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  teacherMsgBox: {
    backgroundColor: '#E8F0FE',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  teacherMsgText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },

});


// export const styles = StyleSheet.create({
//   // e.g., container: { },
//   // leave empty for now; using undefined styles is acceptable.

  
// });
