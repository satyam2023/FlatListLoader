import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Shimmer from '../../components/Shimmer';
import styles from './Style/Style';

const itemSeparatorComponent = () => <View style={styles.seperatorStyle} />;

const FLatListLoader = () => {
  const data = [{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'},{key:'10'}]
  const [dataStatus,setDataStatus]=useState<boolean>(false);

  useEffect(()=>{
    setTimeout(()=>setDataStatus(true),5000)
},[])
  const renderItem = () => {
    return(
        <View >
        <View style={styles.headerView}>
          {
            !dataStatus?
            <Shimmer 
          width={60}
          height={60}
          borderRadius={100}
          bottomSpace={8}
          />:
          <View style={{width:60,height:60,borderRadius:100,marginBottom:8,backgroundColor:'black'}}> 
            </View> }

           <View style={styles.likeRow}>
        <View style={styles.row}>
          <View style={{justifyContent: 'center'}}>
         { !dataStatus?<Shimmer 
          width={40}
          height={10}
          borderRadius={5}
          bottomSpace={8}
          />:
          <View style={{width:40,height:10,borderRadius:5,marginBottom:8,backgroundColor:'black'}}> 
            </View> 


         }
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
        { !dataStatus?  <Shimmer 
          width={80}
          height={10}
          borderRadius={5}
          bottomSpace={8}
          />
          :
          <View style={{width:80,height:10,borderRadius:5,marginBottom:8,backgroundColor:'black'}}> 
            </View> 


         }
        </View>
      </View>

      </View>
      <View style={styles.content}> 
      { !dataStatus?
       <Shimmer 
          width={200}
          height={182}
          borderRadius={5}
          bottomSpace={8}
          />:
          <View style={{width:200,height:182,borderRadius:5,marginBottom:8,backgroundColor:'black'}}> 
          </View> 


      }
          </View>
    </View>
    )
      
  };

  return (
    <View>
        
      <FlatList
        data={data}
        ItemSeparatorComponent={itemSeparatorComponent}
        renderItem={renderItem}
      />
     

    </View>
  );
};

export default FLatListLoader;