import { Platform, StyleSheet } from 'react-native';
import { height, width } from '../../utils/Dimension';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? height(10) : height(8),
    backgroundColor: AppColors.chocolate,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabItemsStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(19),
    height: '100%',
    bottom:0,
  },
  bottomTabIndicator: {
    position: 'absolute',
    top: 0,
    height: height(0.2),
    width: width(16),
  },
  textStyle: {
    fontWeight:'bold',
    fontSize:width(2.8)
  },
});

export default styles;
