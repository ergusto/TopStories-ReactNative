import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { RootStackParamList } from '../../../navigation.types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Details</Text>
      </Layout>
    </SafeAreaView>
  );
};
