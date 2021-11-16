import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Bikeitem from '../Bikeitem';

import styles from './styles';
import bikes from './bikes';

const BikesList= (props) => {
    return(
        <View style={styles.container}>
            <FlatList
            data={bikes}
            renderItem={({item}) => <Bikeitem  bike={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );

};

export default BikesList ;