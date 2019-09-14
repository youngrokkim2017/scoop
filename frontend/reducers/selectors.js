export const selectAllBusinesses = ({ businesses }, businessId) => {
    return Object.values(state.entities.businesses);
}