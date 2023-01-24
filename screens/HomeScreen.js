import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from "react-native";
import Swiper from 'react-native-deck-swiper';
import styles from './Styles';
import catImage from '../assets/cat.png';
import { Entypo, Fontisto, Feather } from '@expo/vector-icons';
import tw from "tailwind-rn";
import Switch from 'react-native-switch-toggles';
import api from '../utils/api';


global.__reanimatedWorkletInit = () => { };
const HomeScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [catName, setCatName] = React.useState('');
    const [catCountry, setCatCountry] = React.useState('');
    const [adaptability, setAdaptability] = React.useState('');
    const [catUrlImage, setCatUrlImage] = React.useState('');
    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'cat',
            origin: 'cat',
            adaptability: 'cat',
            image: 'cat',
            reference_image_id: 'cat'
        }

    ]);
    const swipeRef = React.useRef(null);
    const Item = ({ renderContent }) => {
        return <View style={styles.item}>{renderContent()}</View>;
    };


    const onSwiped = (cardIndex) => {

        // api.get(`v1/images/${data[cardIndex].id}`).then((res) => {
        //     console.log(res.data);
        //     setCatUrlImage(res.data.url);

        // }).catch((error) => {
        //     console.log(error);
        // }
        // );
        console.log(cardIndex)
        api.post('v1/votes/', {
            "image_id": data[cardIndex].reference_image_id,
            "value": 1,
            // "sub_id": "demo-1b1b1b1"
        }).then((response) => {
            console.log("like", response.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );



    }

    //




    useEffect(() => {
        api.get('v1/breeds').then((response) => {

            setData(response.data.map((item, index) => {
                if (item?.image?.url) {

                    return {
                        id: item.id,
                        name: item.name,
                        origin: item.origin,
                        adaptability: item.adaptability,
                        image: item.image.url,
                        reference_image_id: item.reference_image_id
                    }
                }
            }
            ))
            // console.log(response.data[0].image.url);
            // console.log(response.data);
//expo clear comando para limpar cache




            // api.get(`v1/images/${response.data[0].reference_image_id}`).then((res) => {
            //     console.log(res.data.url);
            //     setCatUrlImage(res.data.url);
            //     setCatUrlImage(catImage);
            //     setCatName(res.data.breeds[0].name);
            //     setCatCountry(res.data.breeds[0].origin);
            //     setAdaptability(res.data.breeds[0].adaptability);
            // }).catch((error) => {
            //     console.log(error);
            // }
            // );



        }).catch((error) => {
            console.log(error);
        });
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
                                            <Text style={styles.textNumber} >{card.adaptability}</Text>
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