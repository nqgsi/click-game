import { useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
// import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [count, SetCount] = useState(0);
  const [count1, SetCount1] = useState(0);
  const [boosted, setBoosted] = useState(false);

  const increment = () => {
    const value = boosted ? 3 : 1;
    SetCount(count + value);
    SetCount1(count1 + value);
  };

  const enableBoost = () => {
    setBoosted(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#271c5fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={{
              uri: "https://the-death-star.netlify.app/static/media/the-death-star.ed327467.png",
            }}
            style={{
              width: 200,
              height: 200,
              marginRight: 400,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: 350,
              marginTop: 150,
            }}
          >
            <Animatable.Image
              animation="bounce"
              iterationCount="infinite"
              source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/020/716/945/small_2x/3d-glossy-dollar-coin-golden-reflective-dollar-coin-3d-illustration-png.png",
              }}
              style={{
                width: 100,
                height: 100,
              }}
            />

            <Animatable.Text animation="bounce" iterationCount="infinite">
              <View>
                <Text style={{ fontSize: 50, color: "white" }}>X {count}</Text>
              </View>
            </Animatable.Text>
          </View>
        </View>
        <View style={{ marginTop: 50, alignItems: "center" }}>
          {!boosted && (
            <Animatable.View animation="flash" iterationCount="infinite">
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <Button
                  title="Get Energy!!!"
                  onPress={enableBoost}
                  color="#00ffcc"
                />
              </View>
            </Animatable.View>
          )}

          <Text style={{ color: "white", fontSize: 150 }}>{count1}</Text>
          <Text style={{ fontSize: 20, color: "white" }}>
            Planets Destroyed
          </Text>

          <Animatable.View animation="pulse" iterationCount="infinite">
            <Button
              title="Destroy a Planet!!"
              onPress={increment}
              color="#f30606ff"
            />
          </Animatable.View>
          <Text style={{ color: "white", opacity: 0.5 }}>
            {boosted ? "3 Planets per click (Boosted!)" : "1 Planet per click"}
          </Text>
        </View>
      </ScrollView>
      {count1 >= 50 && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Image
            source={{
              uri: "https://media.tenor.com/mZZoOtDcouoAAAAM/stop-it-get-some-help.gif",
            }}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
      )}
    </View>
  );
}
