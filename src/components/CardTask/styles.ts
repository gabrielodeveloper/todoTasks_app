import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 8
  },

  taskText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    paddingHorizontal: 12,
    color: '#F2F2F2'
  },

  taskTextDone: {
    flex: 1,
    textDecorationLine: "line-through",
    paddingHorizontal: 12,
    color: '#808080',
  }
})