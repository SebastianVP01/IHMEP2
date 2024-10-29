import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Ubicación */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text style={styles.locationText}>9185 Mayflower Drive Atlanta</Text>
      </View>

      {/* Imagen destacada */}
      <View style={styles.featuredImageContainer}>
        <Image
          source={{ uri: 'https://www.themarkethink.com/wp-content/uploads/2021/08/sushi-roll.jpg' }} 
          style={styles.featuredImage}
        />
      </View>

      {/* Restaurantes */}
      <Section title="All restaurants">
        <RestaurantCard imageUri="https://www.cocinafacil.lat/_astro/burritos-de-carne.w4b9rDnX_Z1JNsgL.webp" name="Groceries" rating="4.7" categories="burger, dessert" time="15-20 min" />
        <RestaurantCard imageUri="https://www.cocinafacil.lat/_astro/burritos-de-carne.w4b9rDnX_Z1JNsgL.webp" name="Groceries" rating="4.7" categories="burger, dessert" time="15-20 min" />
      </Section>

      {/* Groceries */}
      <Section title="All Groceries">
        <GroceryCard imageUri="https://i5.walmartimages.com/asr/ae39a640-ff4b-4570-becf-744d92d66d45.1869f7ddeea80ff7712ea89487adc0d3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" name="Groceries" rating="4.7" time="15-20 min" />
        <GroceryCard imageUri="https://i5.walmartimages.com/asr/ae39a640-ff4b-4570-becf-744d92d66d45.1869f7ddeea80ff7712ea89487adc0d3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" name="Groceries" rating="4.7" time="15-20 min" />
        <GroceryCard imageUri="https://i5.walmartimages.com/asr/ae39a640-ff4b-4570-becf-744d92d66d45.1869f7ddeea80ff7712ea89487adc0d3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" name="Groceries" rating="4.7" time="15-20 min" />
      </Section>

      {/* Specials */}
      <Section title="Specials">
        <SpecialCard title="winestory" subtitle="Special Offer" />
        <SpecialCard title="winestory" subtitle="Special Offer" />
      </Section>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const RestaurantCard = ({ imageUri, name, rating, categories, time }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUri }} style={styles.cardImage} />
    <Text style={styles.cardName}>{name}</Text>
    <Text style={styles.cardDetails}>{categories}</Text>
    <Text style={styles.cardDetails}>{time}</Text>
  </View>
);

const GroceryCard = ({ imageUri, name, rating, time }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUri }} style={styles.cardImage} />
    <Text style={styles.cardName}>{name}</Text>
    <Text style={styles.cardDetails}>{time}</Text>
  </View>
);

const SpecialCard = ({ title, subtitle }) => (
  <View style={styles.specialCard}>
    <Text style={styles.specialTitle}>{title}</Text>
    <Text style={styles.specialSubtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  locationText: { marginLeft: 8, fontSize: 16, color: 'black' },
  featuredImageContainer: { borderRadius: 15, overflow: 'hidden', marginBottom: 16 },
  featuredImage: { width: '100%', height: 200 },
  section: { marginBottom: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { fontSize: 14, color: '#007bff' },
  sectionContent: { flexDirection: 'row', flexWrap: 'wrap' },
  card: { width: '48%', marginBottom: 16 },
  cardImage: { width: 150, height: 100, borderRadius: 10 },
  cardName: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  cardDetails: { fontSize: 14, color: 'gray' },
  specialCard: { width: '48%', height: 100, backgroundColor: '#000', borderRadius: 10, justifyContent: 'center', padding: 16 },
  specialTitle: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  specialSubtitle: { fontSize: 14, color: '#fff' },
});

export default HomeScreen;