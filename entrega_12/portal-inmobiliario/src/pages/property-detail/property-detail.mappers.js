export const mapPropertyApiToVm = (property) => ({
  id: property.id,
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
  equipmentIds: Array.isArray(property.equipmentIds)
    ? property.equipmentIds
    : '',
  price: `${property.price.toLocaleString()} €`,
  mainImage: Array.isArray(property.images) ? property.images[0] : '',
  images: Array.isArray(property.images) ? property.images : [],
});

const getWord = (element, plural, singular) =>
  element > 1 ? plural : singular;
