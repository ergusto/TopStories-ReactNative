import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, Button, Layout } from '@ui-kitten/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation.types';
import { useGetTopStories } from '../../hooks/queries/useTopStories';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const navigateDetails = () => {
    navigation.navigate('Detail', { ArticleId: '12' });
  };

  const { data, isLoading } = useGetTopStories('arts');
  console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        {!isLoading && data && (<Text>{data}</Text>)}
      </Layout>
    </SafeAreaView>
  );
};
