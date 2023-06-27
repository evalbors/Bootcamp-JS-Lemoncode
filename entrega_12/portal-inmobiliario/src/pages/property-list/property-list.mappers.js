// para el listado de entidades que es property
export const mapPropertyListFromApiToVM = (propertyList) => {
  return propertyList.map((property) => mapPropertyFromApiToVM(property));
};
// para una sola entidad
const mapPropertyFromApiToVM = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter} m2`,
    notes: `${property.notes.substring(0, 240)} ...`,
    price: `${property.price.toLocaleString()} €`,
    image: Array.isArray(property.images) ? property.images[0] : '',
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};
