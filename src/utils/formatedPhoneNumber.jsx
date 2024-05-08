const formatPhoneNumber = (phoneNumber) => {
  // Supprimer tous les caractères non numériques et les espaces
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Supprimer les caractères non numériques
  const formattedPhoneNumber = `+33${cleanedPhoneNumber.substring(1)}`; // Ajouter le préfixe international
  return formattedPhoneNumber;
};

export default formatPhoneNumber;
