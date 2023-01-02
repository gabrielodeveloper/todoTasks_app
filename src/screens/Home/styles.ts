import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 10
  },

  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },

  form: { 
    flexDirection: 'row',
    marginTop: -30
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#262626',
    padding: 16,
    color: '#D9D9D9',
    fontFamily: 'Inter_400Regular'
  },
  
  button: {
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    marginLeft: 8
  },

  tasks: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 21
  },

  numberTask: {
    width: 25,
    height: 19,
    backgroundColor: '#262626',
    borderRadius: 999,

    textAlign: 'center',
    color: '#F2F2F2',
    fontWeight: 'bold',
  },

  tasksCreated: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  tasksCreatedText: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#4EA8DE',
    marginRight: 12
  },

  tasksConcluded: {
    flexDirection: 'row'
  },

  tasksConcludedText : {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#8284FA',
    marginRight: 12
  },

  listEmptyImg: {
    marginTop: 48,
    marginBottom: 16
  },

  listEmpty: {
    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth: 3,
    borderTopColor: '#262626',
    marginTop: 21
  },

  listTextFirst: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: '#808080'
  },

  listTextSecond: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#333333'
  }

})