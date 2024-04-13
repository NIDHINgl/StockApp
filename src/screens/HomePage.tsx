import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import CustomHeader from '../components/header/index';
import { StockItem, Seperator, BottomSheet, Exception } from '../components/';
import { fetchStocks } from '../api/stockAPI';
import { styles } from './styles';


const HomePage = () => {
  const { data, isLoading, isError } = useQuery('portfolioData', fetchStocks);

  if(isLoading){
    return <Exception loading={true} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Upstox Holding" />
      <FlatList
        data={data?.userHolding}
        style={{ flexGrow: 0 }}
        showsVerticalScrollIndicator={false}
        key={({ index }: any) => index}
        ItemSeparatorComponent={<Seperator />}
        renderItem={({ item, index }: any) => <StockItem item={item} index={index} />}
      ListEmptyComponent={<Exception />}
      />
      <BottomSheet holdingsData={data?.userHolding} />
    </SafeAreaView>
  );
};

export default HomePage;
