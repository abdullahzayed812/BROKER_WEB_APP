import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { generateList } from "@/utility";

// Reusable components
const SearchBar = ({ placeholder, onSearch }) => (
  <View className="flex-row items-center bg-white rounded-lg px-4 py-2 flex-1">
    <Ionicons name="search-outline" size={20} color="#9CA3AF" />
    <TextInput
      placeholder={placeholder}
      className="ml-2 flex-1"
      onChangeText={onSearch}
    />
  </View>
);

const FilterDropdown = ({ label }) => (
  <Pressable className="bg-white rounded-lg px-4 py-2 flex-row items-center">
    <Text>{label}</Text>
    <Ionicons name="chevron-down" size={20} color="#9CA3AF" className="ml-2" />
  </Pressable>
);

const ActionButton = ({ icon, color = "#9CA3AF", onPress }) => (
  <Pressable
    className="w-10 h-10 rounded-lg bg-gray-100 items-center justify-center"
    onPress={onPress}
  >
    <Ionicons name={icon} size={20} color={color} />
  </Pressable>
);

const TableHeader = () => (
  <View className="flex-row bg-blue-50 py-2 border-b border-gray-200">
    <View className="w-8">
      <Text> </Text>
    </View>
    <View className="flex-1">
      <Text className="font-semibold">Name</Text>
    </View>
    <View className="flex-1">
      <Text className="font-semibold">Role</Text>
    </View>
    <View className="flex-1">
      <Text className="font-semibold">Email</Text>
    </View>
    <View className="flex-1">
      <Text className="font-semibold">Phone number</Text>
    </View>
    <View className="w-20">
      <Text> </Text>
    </View>
  </View>
);

const TableRow = ({ member, onEdit, onDelete }) => (
  <View className="flex-row py-4 border-b border-gray-200">
    <View className="w-8">
      <Pressable className="w-5 h-5 border border-gray-300 rounded">
        {/* Checkbox logic here */}
      </Pressable>
    </View>
    <View className="flex-1">
      <Text>{member.name}</Text>
    </View>
    <View className="flex-1">
      <Pressable className="flex-row items-center">
        <Text>{member.role}</Text>
        <Ionicons
          name="chevron-down"
          size={16}
          color="#9CA3AF"
          className="ml-1"
        />
      </Pressable>
    </View>
    <View className="flex-1">
      <Text>{member.email}</Text>
    </View>
    <View className="flex-1">
      <Text>{member.phone}</Text>
    </View>
    <View className="w-20 flex-row">
      <ActionButton
        icon="pencil"
        color="#3B82F6"
        onPress={() => onEdit(member)}
      />
      <ActionButton
        icon="trash"
        color="#EF4444"
        onPress={() => onDelete(member)}
      />
    </View>
  </View>
);

const memberItem = {
  id: 1,
  name: "Ahmed Radwan",
  role: "Listing Agent",
  email: "ahmed@company.com",
  phone: "+20 107 877 999",
};

// Main component
export default function MembersPage() {
  const handleSearch = (text) => {
    // Implement search logic
  };

  const handleEdit = (member) => {
    // Implement edit logic
  };

  const handleDelete = (member) => {
    // Implement delete logic
  };

  return (
    <View className="">
      <View className="flex-row items-center space-x-4 mb-6">
        <SearchBar placeholder="Search Members" onSearch={handleSearch} />
        <FilterDropdown label="Filter" />
        <FilterDropdown label="Filter" />
        <FilterDropdown label="Filter" />
        <Pressable className="bg-blue-100 rounded-lg px-4 py-2">
          <Text className="text-blue-600">All</Text>
        </Pressable>
        <ActionButton icon="search" color="#3B82F6" onPress={() => {}} />
      </View>

      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold">{10} Members</Text>
        <View className="flex-row items-center space-x-2">
          <ActionButton icon="download-outline" onPress={() => {}} />
          <ActionButton icon="cloud-upload-outline" onPress={() => {}} />
          <ActionButton icon="help-circle-outline" onPress={() => {}} />
          <Pressable className="bg-blue-100 rounded-lg px-4 py-2 flex-row items-center">
            <Ionicons name="add" size={20} color="#3B82F6" />
            <Text className="text-blue-600 ml-1">Add member</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView className="bg-white p-2">
        <TableHeader />
        {generateList(10, memberItem).map((member) => (
          <TableRow
            key={member.id}
            member={member}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ScrollView>
    </View>
  );
}
