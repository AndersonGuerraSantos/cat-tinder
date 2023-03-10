import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Swiper from 'react-native-deck-swiper';
import styles from './Styles';
import { Entypo, Fontisto, Feather } from '@expo/vector-icons';
import tw from "tailwind-rn";
import Switch from 'react-native-switch-toggles';
import api from '../utils/api';


global.__reanimatedWorkletInit = () => { };
const HomeScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'cat',
            origin: 'cat',
            affection_level: 'cat',
            image: 'cat',
            reference_image_id: 'cat'
        }

    ]);
    const swipeRef = React.useRef(null);
    const Item = ({ renderContent }) => {
        return <View style={styles.item}>{renderContent()}</View>;
    };

    const onSwiped = (cardIndex) => {

        console.log(cardIndex)
        api.post('v1/votes/', {
            "image_id": data[cardIndex].reference_image_id,
            "value": 1,
        }).then((response) => {
            console.log("like", response.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );

    }


    useEffect(() => {
        async function fetchData() {
            api.get('v1/breeds').then((response) => {

                setData(response.data.map((item, index) => {
                    if (item?.image?.url) {

                        return {
                            id: item.id,
                            name: item.name,
                            origin: item.origin,
                            affection_level: item.affection_level,
                            image: item.image.url,
                            reference_image_id: item.reference_image_id
                        }
                    }
                }
                ))


            }).catch((error) => {
                console.log(error);
            });
        }
        fetchData();

    }, []);

    return (

        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.swithHeader}>

                <Item
                    renderContent={() => (
                        <>

                            <Switch
                                size={50}
                                style={{ height: 40 }}
                                value={isEnabled}
                                onChange={(value) => setIsEnabled(value)}
                                activeTrackColor={'#a9a9a9'}
                                inactiveTrackColor={'#a9a9a9'}
                                renderInactiveThumbIcon={() => (

                                    <Fontisto name="tinder" size={20} color={"#EC537E"} />
                                )}
                                renderActiveThumbIcon={() => (
                                    <Fontisto name="star" size={20} color={"#f0dc82"} />
                                )}
                                renderOffIndicator={() => (
                                    <Fontisto name="star" size={20} color={"#878787"} />
                                )}
                                renderOnIndicator={() => (
                                    <Fontisto name="tinder" size={20} color={"#878787"} />
                                )}
                            />
                        </>
                    )}
                />


            </View>
            <View
                style={tw('flex-1 -mt-6 mb-80')}
            >
                <Swiper
                    ref={swipeRef}
                    style={styles.swiper}
                    cards={data}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    stackSize={5}
                    cardIndex={0}
                    verticalSwipe={false}
                    animateCardOpacity
                    onSwipedLeft={() => { console.log('') }}
                    onSwipedRight={(cardIndex) => { onSwiped(cardIndex) }}
                    backgroundColor={'#4FD0E9'}
                    showSecondCard={false}

                    overlayLabels={
                        {
                            left: {
                                title: 'NOPE',
                                style: {
                                    label: {
                                        textAlign: 'right',
                                        color: 'red',
                                    },
                                }

                            },
                            right: {
                                title: 'LIKE',
                                style: {
                                    label: {
                                        textAlign: 'left',
                                        color: 'green',
                                    },
                                }
                            }
                        }
                    }
                    renderCard={(card) => {
                        console.log(card)
                        return (
                            <View
                                key={card.id}
                                style={tw('relative bg-white h-3/4 rounded-xl')}
                            >

                                <Image source={
                                    {
                                        uri:
                                            card.image
                                    }
                                }

                                    style={tw('absolute top-0 h-full w-full rounded-xl')}

                                />
                                <View

                                    style={{
                                        backgroundColor: "white",

                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,
                                        padding: 10,
                                        position: "absolute",
                                        width: "90%",
                                        bottom: 0,
                                        alignSelf: "center"
                                    }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View>
                                            <Text style={styles.textName} >{card.name}</Text>
                                            <Text style={styles.textCountry} >{card.origin}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.textNumber} >{card.affection_level}</Text>
                                        </View>
                                    </View>


                                </View>
                            </View>
                        )
                    }}

                >
                </Swiper>

            </View>
            <View

                style={tw('flex-row justify-evenly mb-6 mt-24')}
            >
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeLeft()}
                    style={styles.button}
                >
                    <Feather name="x" size={27} color="#E16359" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => swipeRef.current.swipeRight()}
                    style={styles.button}
                >
                    <Entypo name="heart" size={27} color="#6BD88E" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>


    );
}

export default HomeScreen;