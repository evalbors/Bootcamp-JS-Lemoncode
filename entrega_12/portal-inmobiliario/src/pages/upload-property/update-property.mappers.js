export const mapGeneralDataVmToApi = (property) => ({
  ...property,
  comments: property.notes,
});
export const mapGeneralDataApiToVm = (property) => ({
  ...property,
  notes: property.comments,
});
