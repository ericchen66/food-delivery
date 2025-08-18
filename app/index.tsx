import { images, offers } from "@/constants";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-between flex-row w-full my-5 px-5">
        <View className="flex-start">
          <Text className="small-bold text-primary">DELIVER TO</Text>
        </View>
      </View>
      
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {

          return (
            <View>
              <Pressable className={`offer-card ${index % 2 == 0 ? "flex-row-reverse" : "flex-row"}`} 
                style={{backgroundColor: item.color}}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image source={item.image} className="size-full" resizeMode="contain">

                      </Image>
                    </View>

                    <View className={`offer-card__info ${index % 2 == 0 ? "pl-10" : "pr-10"}`}>
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}

        contentContainerClassName="px-5"
      />
    </SafeAreaView>
  );
}
