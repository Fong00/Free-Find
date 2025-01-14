import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EmployerContact from '../../Shared/employerContact';

const DisplayPostScreen = (props) => {

  const [item, setItem] = useState(props.route.params.item);

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "#C5CFE3", }}>
        <ScrollView >

          <View style={styles.typeOfWork}><Text style={styles.typeOfWorkText}>{item.type_of_work}</Text></View>

          <View style={styles.EmployerContact}>
            <EmployerContact image={item.image_who_post} name={item.name_who_post} />
          </View>

          <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitleBoxtext}>รับสมัคร :  {item.title}
            </Text>
          </View>

          <View>
            <Image
              style={styles.imageStyle}
              source={{ uri: item.image ? item.image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
            <View style={{}}>
              <Text style={{ fontSize: 18 }}>
                จำนวน  {item.count_recruit}
              </Text>
            </View>

            <View style={{}}>
              <Text style={{ fontSize: 18 }}>
                สมัครแล้ว  {item._id_apply.length}
              </Text>
            </View>
          </View>

          <View style={styles.contextDisplayPostBox}>
            <Text style={styles.contextDisplaytext}>{"    " + item.description}</Text>
          </View>

          <View style={styles.footSpace}>
            <Text>&nbsp; </Text>
          </View>

          <View style={{ marginLeft: 30, marginBottom: 15 }}>
            <Text style={{ fontSize: 18 }}>
              ผู้ว่าจ้าง  {item.name_who_post}
            </Text>
          </View>

          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <TouchableOpacity style={styles.ApplyButtonContainer}>
              <View>
                <Text style={styles.textButton}>สมัคร</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
};

export default DisplayPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeadDisplayPost: {
    backgroundColor: "#DAE9FE",
    height: 99
  },
  textHeadDisplayPost: {
    paddingTop: 50,
    paddingLeft: 70,
    fontSize: 20,
    fontWeight: '400'
  },
  EmployerContact: {
    paddingRight: 100,
    paddingTop: 10
  },
  jobTitleBox: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row"
  },
  jobTitleBoxtext: {
    fontSize: 25,
    fontWeight: '400'
  },
  contextDisplayPostBox: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row"
  },
  contextDisplaytext: {
    fontSize: 20,
    fontWeight: '400'
  },
  contactOwnerPostBox: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row"
  },
  contactOwnerPosttext: {
    fontSize: 15,
    fontWeight: '400'
  },
  employerPostBox: {
    marginTop: 2,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row"
  },
  employerPosttext: {
    fontSize: 15,
    fontWeight: '400'
  },

  typeOfWork: {
    backgroundColor: '#9DAFF1',
    marginLeft: 250,
    marginRight: 30,
    borderRadius: 40,
    marginTop: 15
  },
  typeOfWorkText: {
    fontSize: 15,
    fontWeight: '700',
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 28,
    color: '#ffffff',
  },
  imageStyle: {
    opacity: 0.95,
    height: 350,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20
  },
  textButton: {
    color: "#525354",
    width: '100%',
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    fontWeight: "500"
  },
  ApplyButtonContainer: {
    backgroundColor: "#fff",
    width: 110,
    height: 40,
    borderRadius: 8
  },
});