import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import React, { createRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
interface IShimmer{
    width:number,
    height:number,
    borderRadius:number,
    bottomSpace:number
}


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


const Shimmer = ({width,height,borderRadius=20,bottomSpace}:IShimmer) => {
  
  const avatarRef=createRef();

  useEffect(() => {
   
    const facebookAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(), 
    ]);
   
    Animated.loop(facebookAnimated).start();
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <ShimmerPlaceholder
        ref={avatarRef} 
        stopAutoRun 
        delay={1200} 
        duration={1000} 
        style={{
          width: width, 
          height: height, 
          borderRadius: borderRadius,
         bottomSpace:bottomSpace}}
      />
    </View>
);
};

export default Shimmer; 