import React, { useState } from "react";
import { TextInput, ScrollView, Text, View } from "react-native";
import { ModalContainer } from "../shared/ModalContainer";
import { TagButton } from "../shared/TagButton";
import { Button } from "../shared/Button";
import { Checkbox } from "../shared/Checkbox";

interface CompaniesFilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CompaniesFilterModal: React.FC<CompaniesFilterModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const companies = [
    "Remax",
    "SSD",
    "Orascom",
    "Coldwill Banker",
    "Palm Hills",
    "Madinet Masr",
  ];

  const toggleCompany = (company: string) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <TextInput
        placeholder="Company?"
        className="bg-gray-100 rounded-full px-4 py-2 mb-4"
      />
      <Text className="font-semibold mb-2">Popular</Text>
      <View className="flex-row flex-wrap mb-4">
        {companies.map((company) => (
          <TagButton
            key={company}
            label={company}
            isSelected={selectedCompanies.includes(company)}
            onPress={() => toggleCompany(company)}
          />
        ))}
      </View>
      <ScrollView className="mb-4">
        {companies.map((company) => (
          <Checkbox
            key={company}
            label={company}
            isChecked={selectedCompanies.includes(company)}
            onToggle={() => toggleCompany(company)}
          />
        ))}
      </ScrollView>
      <Button title="Apply" onPress={onClose} primary />
    </ModalContainer>
  );
};
