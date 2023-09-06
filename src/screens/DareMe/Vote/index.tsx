import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import DareOption from "../../../components/DareOption";
import { PrimaryButton } from "../../../components/common/Button";
import CustomMoal from "../../../components/common/Modal";
import { DonutIconSvg, UserGroupIconSvg, BackIconSvg } from "../../../assets/svg";

const DareMeVoteScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [donut, setDonut] = useState(null);

  const DareMeDetailScreen = () => {
    navigation.navigate('DareMe-Detail');
  }

  const VoteModalOpen = (count) => {
    setDonut(count);
    setVisible(true);
  }

  const VoteDareOption = () => {
    setVisible(false);
  }

  return (
    <ScrollView vertical style={{ backgroundColor: '#FFFFFF' }}>
      <View style={{ width: '100%', alignItems: 'center', paddingVertical: 10}}>
        <View style={styles.screenHeader}>
          <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={DareMeDetailScreen}>
              <SvgXml xml={BackIconSvg} />
            </TouchableOpacity>
          </View>
          <Text style={styles.screenTitle}>Vote in Dare Option</Text>
          <View style={{ width: 40, height: 40 }}></View>
        </View>
        <View style={styles.optionContainer}>
          <View style={{ marginVertical: 5 }}>
            <DareOption 
              title={"1st Dare Option"}
              username="James"
              onPress={() => {}} 
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <PrimaryButton
              text="Vote (1 donut)" 
              outlined={true}
              width={'100%'}
              onPress={() => VoteModalOpen(1)}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <PrimaryButton
              text="Vote (10 donuts)"
              outlined={true}
              width={'100%'}
              onPress={() => VoteModalOpen(10)}
            />
          </View>
        </View>
      </View>
      <CustomMoal 
        visible={visible}
        setVisible={setVisible}
        title={"Vote"}
      >
        <Text style={styles.donutCount}>{donut ? donut : ''} donut{donut === 10 ? 's' : ''} For:</Text>
        <Text style={styles.optionTitle}>Dare option title</Text>
        <View style={{ marginTop: 10, justifyContent: 'center', flexDirection: 'row' }}>
          <PrimaryButton width={200} text="Confirm" onPress={VoteDareOption} />
        </View>
      </CustomMoal>
    </ScrollView>
  ); 
};

const styles = StyleSheet.create({
  screenHeader: {
    width: '100%',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 600,
    color: '#EFA058',
    textAlign: 'center'
  },
  optionContainer: {
    marginTop: 5,
    width: 324,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'rgb(0, 0, 0, 0.35)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  donutCount: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 5,
  },
  optionTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default DareMeVoteScreen;