import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constans/colors";

function Button({ onPress, children}) {
  return (
    <Pressable 
      style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  }, 
  text: {
    textAlign: 'center',
    color: Colors.primary50,
  },
});

export default Button;