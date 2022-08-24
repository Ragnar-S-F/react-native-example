import {Image, StatusBar, StyleSheet, View} from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    text: {
        color: 'grey',
    fontSize: 14,
      },
      blackText: {
        color: 'black',
      },
      bigText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: "center"
      },
      flexContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#FFFFFF',
        padding: 20,
        flexDirection: 'column',
      },
      containerTop: {
        flexDirection: 'row',
        marginBottom: 25,
      },
      containerText: {
        flexDirection: 'column',
        marginLeft: 20,
      },
      language: {
        backgroundColor: "#0366d6",
        flexGrow: 0,
        borderRadius: 2
      },
      containerBottom: {
        flexDirection: 'row',
        justifyContent: "space-between"
      },
  });

  const FancyText = ({ isBlack, isBig, children }) => {
    const textStyles = [
      styles.text,
      isBlack && styles.blackText,
      isBig && styles.bigText,
    ];
  
    return <Text style={textStyles}>{children}</Text>;
  };

  export function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

const RepositoryItem = ({title}) => (
    <View style={styles.flexContainer}>
        <View style={styles.containerTop}>
            <Image source={{uri:title.ownerAvatarUrl, width:60,height:60 }} />

            <View style={styles.containerText}>
                <View style={{marginBottom: 10}}>
                <Text color="textSecondary" fontWeight="bold" fontSize="subheading">{title.fullName}</Text>
                </View>
                <View style={{marginBottom: 10}}>
                <Text>{title.description}</Text>
                </View>
                <View style={styles.language}>
                <Text>{title.language}</Text>
                </View>
            </View>
            
        </View>


<View style={styles.containerBottom}>
    <View>
    <FancyText isBig isBlack>{kFormatter(title.stargazersCount)}</FancyText>
    <Text style={{ textAlign: "center"}}>Stars</Text>
    </View>

    <View>
    <FancyText isBig isBlack>{kFormatter(title.forksCount)}</FancyText>
    <Text style={{ textAlign: "center"}}>Forks</Text>
    </View>

    <View>
    <FancyText isBig isBlack>{kFormatter(title.reviewCount)}</FancyText>
    <Text style={{ textAlign: "center"}}>Reviews</Text>
    </View>

    <View>
    <FancyText isBig isBlack>{kFormatter(title.ratingAverage)}</FancyText>
    <Text style={{ textAlign: "center"}}>Rating</Text>
    </View>
    </View>
  </View>
);

export default RepositoryItem;