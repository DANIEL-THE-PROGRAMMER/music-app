import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon } from "../../components/icon";
import { RewardsIcon } from "../../components/icon";
import { SearchIcon } from "../../components/icon";
import { FavouritesIcon } from "../../components/icon";
import Home from "../home";
import Rewards from "../rewards";
import Search from "../search";
import Favourites from "../favourites";
import Music from "../music";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const HomeTabIcon = () => <HomeIcon />;
const RewardsTabIcon = () => <RewardsIcon />;
const SearchTabIcon = () => <SearchIcon />;
const FavouritesTabIcon = () => <FavouritesIcon />;

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Music} />
    </HomeStack.Navigator>
  );
}

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 16,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? <HomeTabIcon /> : <HomeTabIcon />;
          } else if (route.name === "Rewards") {
            iconName = focused ? <RewardsTabIcon /> : <RewardsTabIcon />;
          } else if (route.name === "Search") {
            iconName = focused ? <SearchTabIcon /> : <SearchTabIcon />;
          } else if (route.name === "Favourites") {
            iconName = focused ? <FavouritesTabIcon /> : <FavouritesTabIcon />;
          }

          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      initialRouteName="Rewards"
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Rewards" component={Rewards} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
};
