export const mapPropertyApiToVm = (property, equipmentList) => ({
  title: property.title,
  notes: property.notes,
  city: property.city,
  squareMeter: `${property.squareMeter}m2`,
  rooms: `${property.rooms} ${getWord(
    property.rooms,
    'habitaciones',
    'habitación'
  )}`,
  bathrooms: `${property.bathrooms} ${getWord(
    property.bathrooms,
    'habitaciones',
    'habitación'
  )}`,
  locationUrl: property.locationUrl,
  mainFeatures: Array.isArray(property.mainFeatures)
    ? property.mainFeatures
    : '',
  equipments: getEquipments(property, equipmentList),
  price: `${property.price.toLocaleString()} €`,
  mainImage: Array.isArray(property.images) ? property.images[0] : [],
  images: Array.isArray(property.images) ? property.images : [],
});

const getWord = (element, plural, singular) =>
  element > 1 ? plural : singular;

const getEquipments = (property, equipmenstList) => {
  const equipments = property.equipmentIds.map(
    (equipmentId) =>
      equipmenstList.find((equipment) => equipment.id === equipmentId).name
  );
  return equipments;
};
