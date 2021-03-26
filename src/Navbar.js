import React from "react";
import { View, Text } from "react-native";

const navbar = (props) => {
  return (
    <View
      style={{
        fontWeight: "900",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingStart: "0 30%",
        padding: "50px 50px",
        width: "100%",
        // height: 70,
        backgroundColor: "rgba(255, 255, 255, 255)",
        boxShadow: "0px 2px 2px #ccc"
      }}
    >
      <Text style={{}}>
        <Text
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: 32,
            color: "rgba(0, 0, 0, 255)"
          }}
        >
          {" "}
          BOOK{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: 32,
            color: "rgba(0, 127, 255, 255)"
          }}
        >
          EX.
        </Text>{" "}
      </Text>
      <View
        style={{
          alignItems: "flex-start",
          marginStart: 915,
          marginTop: 6
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            paddingStart: 29,
            paddingTop: 6,
            width: 132,
            height: 34,
            borderRadius: 17,
            backgroundColor: "rgba(0, 167, 255, 255)"
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 16,
              color: "rgba(255, 255, 255, 255)"
            }}
          >
            {" "}
            About Us{" "}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          marginStart: 50,
          marginTop: 6
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            paddingStart: 18,
            paddingTop: 6,
            width: 126,
            height: 34,
            borderRadius: 17,
            backgroundColor: "rgba(0, 167, 255, 255)"
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 16,
              color: "rgba(255, 255, 255, 255)"
            }}
          >
            {" "}
            Contact Us{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default navbar;
